import { ElTabs, ElTabPane } from "element-plus";
import { Ref, defineComponent } from "vue";
import styleLib from "@styles/lib.module.scss";

interface Props {
  tab: Ref<string>;
  tabList: string[];
}

export const Tabs = defineComponent<Props>(
  props => {
    return () => (
      <div class={styleLib.componentWrapper}>
        <ElTabs v-model={props.tab.value}>
          {props.tabList.map(tab => (
            <ElTabPane
              label={tab}
              name={tab}
            ></ElTabPane>
          ))}
        </ElTabs>
      </div>
    );
  },
  { props: ["tab", "tabList"] }
);
