import { defineComponent, h } from "vue";
import { elementPlus } from "./table";
import { ElCard } from "element-plus";

export const processLibrary = defineComponent(() => {
  return () => (
    <ElCard>
      {{
		header: () => <span>工序库</span>,
        default: () => h(elementPlus)
      }}
    </ElCard>
  );
});