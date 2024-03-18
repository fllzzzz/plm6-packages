import { defineComponent } from "vue";
import { Tab } from "./tab";

export const ProjectLaborCost = defineComponent(() => {
  const tabList = ["实时计算模式", "入库倒推模式"];
  const handleTabSelect = (name: string) => {
    alert(name);
  };
  return () => <Tab tabList={tabList} onSelect={handleTabSelect}></Tab>;
});
