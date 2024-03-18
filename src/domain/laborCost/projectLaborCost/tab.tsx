import { ElTabPane, ElTabs } from "element-plus";
import { defineComponent, ref, watch } from "vue";

interface Props {
  tabList: string[];
}
type Emits = {
  select: (name: string) => boolean;
}

export const Tab = defineComponent<Props, Emits>((props, { emit }) => {
    const currentTabName = ref<string>();
	watch(currentTabName, value => emit('select', value));
    return () => (
      <ElTabs v-model={currentTabName.value}>
        {props.tabList.map((t) => (
          <ElTabPane label={t} name={t}></ElTabPane>
        ))}
      </ElTabs>
    );
  },
  { props: ["tabList"] }
);