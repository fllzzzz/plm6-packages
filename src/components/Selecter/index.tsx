import { ElSelect, ElOption } from "element-plus";
import { defineComponent, ref, watch } from "vue";
import { container } from './style.module.scss';
import type { CSSProperties } from 'vue';

interface Props {
  list: string[];
  defaultIndex?: number;
  styles?: CSSProperties;
}

type Emits = {
  select: (opt: string) => boolean;
};

export const Selecter = defineComponent<
  Props,
  Emits
>(
  (props, { emit }) => {
    const currentOption = ref<string>();
    watch(currentOption, value =>
      emit("select", value)
    );
    if (
      props.defaultIndex ||
      props.defaultIndex === 0
    ) {
      currentOption.value =
        props.list[props.defaultIndex];
    }

    return () => (
      <div class={container} style={props.styles}>
        <ElSelect v-model={currentOption.value}>
          {props.list.map(opt => (
            <ElOption value={opt}></ElOption>
          ))}
        </ElSelect>
      </div>
    );
  },
  { props: ["defaultIndex", "list", 'styles'] }
);
