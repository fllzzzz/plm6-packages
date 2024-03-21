import type { RouteRecordRaw } from "vue-router";
import { ref, watch, watchEffect } from "vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/domain',
    name: 'domain',
    children: [
      {
        path: 'labor-cost',
        name: 'laborCost',
        children: [
          {
            path: 'project',
            name: 'project',
            component: () =>
              import("@domain/labor-cost/project/project.view").then(
                ctx => {
                  return <ctx.Project></ctx.Project>
                }
              )
          },
        ],
      },
    ],
  },
  {
    path: "/comp",
    name: "comp",
    children: [
      {
        path: "date-picker",
        name: "datePicker",
        component: () =>
          import("@components/DatePicker").then(
            ctx => {
              const time =
                ref<[string, string]>();
              time.value = [
                "2024-09-01",
                "2024-09-10",
              ];
              return (
                <ctx.DatePicker
                  type="daterange"
                  format="YYYY-MM-DD"
                  time={time}
                  placeholder={{
                    start: "选择开始时间",
                    end: "选择结束时间",
                  }}
                  rangeSeparator="~"
                ></ctx.DatePicker>
              );
            }
          ),
      },
      {
        path: "tabs",
        name: "tabs",
        component: () =>
          import("@components/Tabs").then(ctx => {
            const tabName = ref<string>();
            const tabList = [
              "实时计算模式",
              "入库倒推模式",
            ];

            tabName.value = "实时计算模式";

            return (
              <ctx.Tabs
                tab={tabName}
                tabList={tabList}
              ></ctx.Tabs>
            );
          }),
      },
      {
        path: "selecter",
        name: "selecter",
        component: () =>
          import("@components/Selecter").then(
            ctx => {
              const model = ref<string>();
              const optionList = [
                "同步修改之前的价格",
                "影响修改之后的价格",
              ];

              model.value = '同步修改之前的价格';

              return (
                <ctx.Selecter
                  model={model}
                  optionList={optionList}
                ></ctx.Selecter>
              );
            }
          ),
      },
    ],
  },
];
