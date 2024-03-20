import { Ref, defineComponent, ref } from "vue";
import { ElInput } from "element-plus";

interface Props {
  content: Ref<string>;
  placeholder: string;
}

export const InputBox = defineComponent<Props>(
  props => {
    return () => (
      <ElInput
        v-model={props.content.value}
        placeholder={props.placeholder}
      ></ElInput>
    );
  },{props: ['content', 'placeholder']}
);
