import { defineComponent } from "vue";
import { ElTable, ElTableColumn } from "element-plus";

const data = [
  {
    componentName: "零件",
    componentType: "板材零件",
    productionMode: "数控切割",
    workProcessType: "下料类",
    workProcessList: ["数控火焰", "火焰直条", "数控等离子", "数控激光"],
  },
  {
    componentName: "零件",
    componentType: "型材零件",
    productionMode: "数控切割",
    workProcessType: "钻孔类",
    workProcessList: ["平面钻", "摇臂钻", "冲孔", "钻孔"],
  },
  {
    componentName: "零件",
    componentType: "板材零件",
    productionMode: "半自动切割",
    workProcessType: "下料类",
    workProcessList: ["剪版", "半自动", "卷板"],
  },
  {
    componentName: "零件",
    componentType: "型材零件",
    productionMode: "半自动切割",
    workProcessType: "钻孔类",
    workProcessList: ["钻孔"],
  },
  {
    componentName: "零件",
    componentType: "板材零件",
    productionMode: "数控切割",
    workProcessType: "下料类",
    workProcessList: [
      "车丝",
      "项惯切割",
      "钻割锁",
      "型材切割",
      "锯床",
      "冷弯",
      "热弯",
    ],
  },
  {
    componentName: "零件",
    componentType: "型材零件",
    productionMode: "数控切割",
    workProcessType: "钻孔类",
    workProcessList: ["三维钻", "钻孔"],
  },
  {
    componentName: "零件",
    componentType: "板材零件",
    productionMode: "半自动切割",
    workProcessType: "下料类",
    workProcessList: [],
  },
  {
    componentName: "零件",
    componentType: "型材零件",
    productionMode: "半自动切割",
    workProcessType: "钻孔类",
    workProcessList: [],
  },
  {
    componentName: "部件（单元件）",
    componentType: "焊接型材",
    productionMode: "",
    workProcessType: "",
    workProcessList: ["组立", "埋弧焊", "组U", "组焊", "组焊一体", "二次组立"],
  },
  {
    componentName: "构件",
    componentType: "主次构件",
    productionMode: "",
    workProcessType: "",
    workProcessList: [
      "拼装",
      "机器拼装",
      "焊接",
      "机器焊接",
      "清磨",
      "抛丸",
      "涂装",
      "机器涂喷",
    ],
  },
];

const initializeData = (list: Array<Object>) =>
  list.map((data) =>
    Object.fromEntries(
      Object.entries(data).map((row) =>
        row[1] &&
        ((typeof row[1] === "string" && row[1] !== "") ||
          (row[1] instanceof Array && row[1].length > 0))
          ? row
          : [row[0], "-"]
      )
    )
  );

export const elementPlus = defineComponent(() => {
  const handleIndex = ({ row }) => {
    switch (row.componentName) {
      case "零件":
        return 1;
      case "部件（单元件）":
        return 2;
      case "构件":
        return 3;
    }
  };

  const formatWorkProcessList = ({ row }) => {
    return row.workProcessList instanceof Array
      ? (row.workProcessList as Array<string>).flatMap((str) => {
          return `【${str}】`;
        })
      : row.workProcessList;
  };

  const handleSpan = ({ rowIndex: row, columnIndex: col }) => {
    switch (col) {
      case 0:
      case 1:
        if (row === 0) return [8, 1];
        else if (row > 0 && row < 8) return [0, 0];
      case 2:
        if (row === 0 || row === 4) return [4, 1];
        else if (row > 0 && row < 8) return [0, 0];
      case 3:
        if (row >= 0 && row < 8 && row % 2 === 0) return [2, 1];
        else if (row > 0 && row < 8) return [0, 0];
    }
  };

  return () => (
    <ElTable data={initializeData(data)} border={true} spanMethod={handleSpan}>
      <ElTableColumn label="序号">
        {{
          default: handleIndex,
        }}
      </ElTableColumn>
      <ElTableColumn prop="componentName" label="构零件"></ElTableColumn>
      <ElTableColumn prop="componentType" label="类型"></ElTableColumn>
      <ElTableColumn prop="productionMode" label="生产方式"></ElTableColumn>
      <ElTableColumn prop="workProcessType" label="工序类"></ElTableColumn>
      <ElTableColumn label="工序分类">
        {{
          default: formatWorkProcessList,
        }}
      </ElTableColumn>
    </ElTable>
  );
});
