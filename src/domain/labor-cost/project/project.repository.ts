import type { Model } from "./project.data.mock";

const baseURL = "http://192.168.110.120:8088";

const modeMap = new Map([
  ["实时计算模式", 1],
  ["入库倒推模式", 2],
]);

const scopeMap = new Map([
  ["同步修改前的价格", 1],
  ["影响修改后的价格", 2],
]);

export const load = async (
  mode: string
): Promise<Model[]> => {
  return await fetch(
    `
			${baseURL}
			/api/system/contract-project-statistics-config-link/list
			?statisticsMode=${modeMap.get(mode)}
		`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "x-www-form-urlencoded",
      },
    }
  )
    .then(res => res.json())
    .then(result => result.data)
    .then((list: any[]) => {
      return list.map(data => {
        return {
          mainId: data.id,
          projectId: data.contractProjectId,
          name: data.projectName,
          mode: data.statisticsModeName,
          date: data.statisticsDeadline,
          modifyScenario: [
            {
              date: [
                data.configPriceSyncStartDate,
                data.configPriceSyncEndDate,
              ],
              scope: data.configPriceName,
              mode: "配置价格修改场景",
            },
            {
              date: [
                data.individualPriceSyncStartDate,
                data.individualPriceSyncEndDate,
              ],
              scope: data.individualPriceName,
              mode: "单个价格修改场景",
            },
          ],
        };
      });
    });
};

export const save = async (model: Model) => {
  const modify = model.modifyScenario
    .map(item => {
      console.log(item);
      if (item.mode === "配置价格修改场景")
        return {
          configPrice: scopeMap.get(item.scope),
          configPriceSyncStartDate: item.date[0]
            ? Date.parse(item.date[0])
            : "2024-9-9",
          configPriceSyncEndDate: item.date[1]
            ? Date.parse(item.date[1])
            : "2028-9-8",
        };
      if (item.mode === "单个价格修改场景")
        return {
          individualPrice: scopeMap.get(
            item.scope
          ),
          individualPriceSyncStartDate: item
            .date[0]
            ? Date.parse(item.date[0])
            : "2024-8-1",
          individualPriceSyncEndDate: item.date[1]
            ? Date.parse(item.date[1])
            : "2024-7-7",
        };
    })
    .filter(item => item)
    .reduce((a, b) => Object.assign(a, b));
  const data = {
    id: model.mainId,
    contractProjectId: model.projectId,
    statisticsMode: modeMap.get(model.mode),
    statisticsDeadline: model.date,
    ...modify,
  };

  return await fetch(
    `${baseURL}/api/system/contract-project-statistics-config-link`,
    {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then(res => res.json())
    .then(result => {
      console.log(result);
    });
};
