import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		component: () => import(
			'@components/index'
		).then(component => component.index)
	},
	{
		path: '/table',
		name: 'table',
		component: () => import(
			'@components/table'
		).then(component => component.elementPlus)
	},
];