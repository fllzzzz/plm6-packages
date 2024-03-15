import type { Component } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export const render = defineComponent(() => {
	return () => <RouterView>{{
		default: ({Component, Route}: {
			Component: Component,
			Route: RouteLocationNormalizedLoaded
		}) => Component
	}}</RouterView>
});