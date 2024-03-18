import { defineComponent } from "vue";
import {
	ElTable,
	ElTableColumn,
	ElTimePicker,
} from "element-plus";
import { Date } from "./date";

interface PriceModification {
	type: "global" | "scope";
	effectType: "befor" | "after";
	date: string;
}

interface Data {
	name: string;
	mode: string;
	date: string;
	priceModification: PriceModification[];
}

type DataList = Data[];

const data: DataList = [
	{
		name: "",
		mode: "实时计算模式",
		date: "",
		priceModification: [
			{
				type: "global",
				effectType: "befor",
				date: "",
			},
			{
				type: "scope",
				effectType: "befor",
				date: "",
			},
		],
	},
	{
		name: "",
		mode: "实时计算模式",
		date: "",
		priceModification: [
			{
				type: "global",
				effectType: "befor",
				date: "",
			},
			{
				type: "scope",
				effectType: "befor",
				date: "",
			},
		],
	},
	{
		name: "",
		mode: "实时计算模式",
		date: "",
		priceModification: [
			{
				type: "global",
				effectType: "befor",
				date: "",
			},
			{
				type: "scope",
				effectType: "befor",
				date: "",
			},
		],
	},
	{
		name: "",
		mode: "入库倒推模式",
		date: "",
		priceModification: [
			{
				type: "global",
				effectType: "befor",
				date: "",
			},
			{
				type: "scope",
				effectType: "befor",
				date: "",
			},
		],
	},
	{
		name: "",
		mode: "入库倒推模式",
		date: "",
		priceModification: [
			{
				type: "global",
				effectType: "befor",
				date: "",
			},
			{
				type: "scope",
				effectType: "befor",
				date: "",
			},
		],
	},
	{
		name: "",
		mode: "入库倒推模式",
		date: "",
		priceModification: [
			{
				type: "global",
				effectType: "befor",
				date: "",
			},
			{
				type: "scope",
				effectType: "befor",
				date: "",
			},
		],
	},
];

export const Table = defineComponent((props, { emit }) => {
	const tableContext = new Map<
		string,
		({
			row,
			column,
			index,
		}: {
			row: Data;
			column: any;
			index: number;
		}) => Element | unknown
	>([
		["序号", ({ index }) => index + 1],
		["项目名称", ({ row }) => row.name],
		["项目模式", ({ row }) => row.mode],
		["统计截止日", ({ row }) => row.date],
		[
			"配置价格修改场景",
			({ row }) =>
				row.priceModification.filter(
					p => p.type === "global"
				),
		],
		[
			"单个价格修改场景",
			({ row }) =>
				row.priceModification.filter(
					p => p.type === "scope"
				),
		],
		["操作", () => {}],
	]);

	return () => (
		<ElTable data={data}>
			{Array.from(tableContext.entries()).map(col => (
				<ElTableColumn label={col[0]}>
					{{
						default: ({ row, column, $index: index }) =>
							col[1]({ row, column, index }),
					}}
				</ElTableColumn>
			))}
		</ElTable>
	);
});
