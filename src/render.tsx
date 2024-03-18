import type { VNode } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import 'element-plus/dist/index.css';

export const render = defineComponent(() => {
	return () => <RouterView>{{
		default: ({Component, route}: {
			Component: VNode;
			route: RouteLocationNormalizedLoaded
		}) => {
			return Component;
		}
	}}</RouterView>
});