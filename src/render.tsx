import type { VNode } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css';

export const render = defineComponent(() => {
	return () => <RouterView>{{
		default: ({Component, route}: {
			Component: VNode;
			route: RouteLocationNormalizedLoaded
		}) => {
			return <ElConfigProvider locale={zhCn}>{Component}</ElConfigProvider>;
		}
	}}</RouterView>
});