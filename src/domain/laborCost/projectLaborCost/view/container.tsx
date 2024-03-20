import type { SlotsType } from "vue";
import { defineComponent } from "vue";
import {
  container,
  containerHeader,
  containerBody,
  containerHeaderLeftSide,
  containerHeaderRightSide,
} from "./container.module.scss";

export const Container = defineComponent(
  (props, { slots }) => {
    return () => {
      return (
        <article class={container}>
          <header class={containerHeader}>
            <section
              class={containerHeaderLeftSide}
            >
              {slots.headerLeftSide?.()}
            </section>
            <section
              class={containerHeaderRightSide}
            >
              {slots.headerRightSide?.()}
            </section>
          </header>
          <article class={containerBody}>
            {slots.body?.()}
          </article>
        </article>
      );
    };
  },
  {
    slots: Object as SlotsType<{
      body;
      headerLeftSide;
      headerRightSide;
    }>,
  }
);
