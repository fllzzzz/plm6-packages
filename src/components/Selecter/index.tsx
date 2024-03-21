import styleLib from "@styles/lib.module.scss";
import { ElSelect, ElOption } from "element-plus";
import { defineComponent, Ref } from "vue";

interface Props {
  model: Ref<string>;
  optionList: string[];
  placeholder?: string;
}

export const Selecter = defineComponent<Props>(
  props => {
    return () => (
      <div class={styleLib.componentWrapper}>
        <ElSelect v-model={props.model.value}
			placeholder={props.placeholder}
		>
          {props.optionList.map(option => (
            <ElOption
              label={option}
              value={option}
            ></ElOption>
          ))}
        </ElSelect>
      </div>
    );
  }, {props: ['model', 'optionList']}
);
