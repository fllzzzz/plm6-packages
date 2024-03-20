import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/comp",
    name: "comp",
    children: [
      {
        path: "date-picker",
        name: "datePicker",
        component: () =>
          import("@components/DatePicker").then(
            ctx => ctx.DatePicker
          ),
      },
    ],
  },
];
