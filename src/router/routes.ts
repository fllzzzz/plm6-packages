import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "index",
		component: () =>
			import(
				"@domain/laborCost/projectLaborCost/table"
			).then(ctx => ctx.Table),
	},
	{
		path: "/production-process",
		name: "productionProcess",
		redirect: {
			name: "processLibrary",
		},
		children: [
			{
				path: "process-library",
				name: "processLibrary",
				component: () =>
					import(
						"@domain/productionProcess/processLibrary"
					).then(component => component.view),
			},
		],
	},
];
