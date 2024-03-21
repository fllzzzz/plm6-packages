import {
  defineAsyncComponent,
  ref,
  watch,
  watchEffect,
} from "vue";
import { DatePicker } from "@components/DatePicker";
import { Selecter } from "@components/Selecter";
import { Tabs } from "@components/Tabs";
import {
  ElTable,
  ElTableColumn,
  ElInput,
  ElButton,
} from "element-plus";
import {
  Edit,
  User,
  Search,
  Setting,
  Finished,
} from "@element-plus/icons-vue";
import styles from "./project.module.scss";
import {
  optionList,
  tabList,
} from "./project.data.mock";
import { load, save } from "./project.repository";
import type { Model } from "./project.data.mock";

export const Project = defineAsyncComponent(
  async () => {
    const submitByRow = (model: Model) => {
      return async (e: MouseEvent) => {
        const reuslt = await save(model);
        console.log(reuslt);
      };
    };

    const tabValue = ref<string>("实时计算模式");
    const inputValue = ref<string>();
    const model = ref<Model[]>();
    watchEffect(async () => {
      model.value = await load(
        tabValue.value
      ).then(model => {
        console.log(model);

        return model;
      });
    });
    return () => (
      <div class={styles.container}>
        <div class={styles.header}>
          <div class={styles.headerLeftSide}>
            <Tabs
              tabList={tabList}
              tab={tabValue}
            ></Tabs>
            <ElInput
              v-model={inputValue.value}
              suffixIcon={Search}
              placeholder="请输入项目编号/名称"
            ></ElInput>
          </div>
          <div class={styles.headerRightSide}>
            <ElButton
              round
              icon={Setting}
              color={"yellow"}
            >
              工价配置
            </ElButton>
          </div>
        </div>
        <div class={styles.body}>
          <ElTable data={model.value} border>
            <ElTableColumn
              label="序号"
              minWidth={"7%"}
            >
              {{
                default: ({ $index }) =>
                  $index + 1,
              }}
            </ElTableColumn>
            <ElTableColumn
              label="项目名称"
              minWidth={"15%"}
            >
              {{
                default: ({ row }) => row.name,
              }}
            </ElTableColumn>
            <ElTableColumn
              label="项目模式"
              minWidth={"15%"}
            >
              {{
                default: ({ row }) => row.mode,
              }}
            </ElTableColumn>
            <ElTableColumn
              label="统计截止日期"
              minWidth={"15%"}
            >
              {{
                default: ({
                  row,
                }: {
                  row: Model;
                }) => {
                  const dateVaule = ref<string>();
                  watch(dateVaule, value => {
                    row.date = value;
                  });
                  if (row.date) {
                    dateVaule.value = new Date(
                      row.date
                    )
                      .toLocaleDateString()
                      .replace(/\//g, "-");
                    console.log(dateVaule.value);
                  }
                  return (
                    <DatePicker
                      time={dateVaule}
                      type="date"
                      format="YYYY-M-D"
                      placeholder={{
                        default: "请选择日期",
                      }}
                    ></DatePicker>
                  );
                },
              }}
            </ElTableColumn>
            <ElTableColumn
              label="配置价格修改场景"
              minWidth={"20%"}
            >
              {{
                default: ({
                  row,
                }: {
                  row: Model;
                }) => {
                  const selectValue =
                    ref<string>();
                  const dateValue =
                    ref<[string, string]>();

                  const target =
                    row.modifyScenario.find(
                      d =>
                        d.mode ===
                        "配置价格修改场景"
                    );
                  watch(selectValue, value => target.scope = value);
                  watch(dateValue, value => target.date = value);

                  selectValue.value =
                    target?.scope
                      ? target.scope
                      : undefined;

                  dateValue.value = target?.date
                    ? (target?.date.flatMap(
                        (d: string) =>
                          d
                            ? d.replace(/\//, "-")
                            : ""
                      ) as [string, string])
                    : ["", ""];
                  return (
                    <div
                      class={styles.cellContainer}
                    >
                      <Selecter
                        model={selectValue}
                        optionList={optionList}
                      ></Selecter>
                      <DatePicker
                        time={dateValue}
                        type={"daterange"}
                        format="YYYY-M-D"
                        placeholder={{
                          start: "开始日期",
                          end: "结束日期",
                        }}
                      ></DatePicker>
                    </div>
                  );
                },
              }}
            </ElTableColumn>
            <ElTableColumn
              label="单个价格修改场景"
              minWidth={"20%"}
            >
              {{
                default: ({ row }) => {
                  const selectValue =
                    ref<string>();
                  const dateValue =
                    ref<[string, string]>();
                  const target =
                    row.modifyScenario.find(
                      d =>
                        d.mode ===
                        "单个价格修改场景"
                    );
                  watch(selectValue, value => target.scope = value);
                  watch(dateValue, value => target.date = value);
                  selectValue.value =
                    target?.scope
                      ? target.scope
                      : undefined;

                  dateValue.value = target?.date
                    ? (target?.date.flatMap(
                        (d: string) =>
                          d
                            ? d.replace(/\//, "-")
                            : ""
                      ) as [string, string])
                    : ["", ""];
                  return (
                    <div
                      class={styles.cellContainer}
                    >
                      <Selecter
                        model={selectValue}
                        optionList={optionList}
                      ></Selecter>
                      <DatePicker
                        time={dateValue}
                        type={"daterange"}
                        format="YYYY-MM-DD"
                        placeholder={{
                          start: "开始日期",
                          end: "结束日期",
                        }}
                      ></DatePicker>
                    </div>
                  );
                },
              }}
            </ElTableColumn>
            <ElTableColumn
              label="操作"
              minWidth={"10%"}
            >
              {{
                default: ({ row }) => (
                  <div
                    class={styles.svgContainer}
                  >
                    <span
                      onClick={submitByRow(row)}
                    >
                      <Finished></Finished>
                    </span>
                    <Edit></Edit>
                    <User></User>
                  </div>
                ),
              }}
            </ElTableColumn>
          </ElTable>
        </div>
      </div>
    );
  }
);
