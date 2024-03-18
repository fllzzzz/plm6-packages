import { defineComponent } from 'vue';
import { ElTable, ElTableColumn, ElTimePicker } from 'element-plus';

interface PriceModification {
	type: 'global' | 'scope';
	effectType: 'befor' | 'after';
	date: string;
};

interface Data {
	name: string;
	mode: string;
	date: string;
	priceModification: PriceModification[];
};

type DataList = Data[];

const data: DataList = [
	{
		name: '',
		mode: '',
		date: '',
		priceModification: [
			{
				type: 'global',
                effectType: 'befor',
                date: ''
			},
			{
				type: 'scope',
                effectType: 'befor',
                date: ''
			}
		],
	},
	{
		name: '',
		mode: '',
		date: '',
		priceModification: [
			{
				type: 'global',
                effectType: 'befor',
                date: ''
			},
			{
				type: 'scope',
                effectType: 'befor',
                date: ''
			}
		],
	},
	{
		name: '',
		mode: '',
		date: '',
		priceModification: [
			{
				type: 'global',
                effectType: 'befor',
                date: ''
			},
			{
				type: 'scope',
                effectType: 'befor',
                date: ''
			}
		],
	},
	{
		name: '',
		mode: '',
		date: '',
		priceModification: [
			{
				type: 'global',
                effectType: 'befor',
                date: ''
			},
			{
				type: 'scope',
                effectType: 'befor',
                date: ''
			}
		],
	},
	{
		name: '',
		mode: '',
		date: '',
		priceModification: [
			{
				type: 'global',
                effectType: 'befor',
                date: ''
			},
			{
				type: 'scope',
                effectType: 'befor',
                date: ''
			}
		],
	},
	{
		name: '',
		mode: '',
		date: '',
		priceModification: [
			{
				type: 'global',
                effectType: 'befor',
                date: ''
			},
			{
				type: 'scope',
                effectType: 'befor',
                date: ''
			}
		],
	},
];

export const Table = defineComponent((props, {emit}) => {
	return () => (
		<ElTable>
			<ElTableColumn label='序号'>{{
				default: ({$index}) => $index
			}}</ElTableColumn>
			<ElTableColumn label='项目名称'></ElTableColumn>
			<ElTableColumn label='项目模式'></ElTableColumn>
			<ElTableColumn label='统计截止日'>{{
				default: () => {
					return <ElTimePicker></ElTimePicker>
				}
			}}</ElTableColumn>
			<ElTableColumn label='配置价格修改场景'>{{
				default: ({row}: {row: Data}) => {
					return row.priceModification.filter(
						p => p.type === 'global'
					)[0];
				}
			}}</ElTableColumn>
			<ElTableColumn label='单个价格修改场景'>{{
				default: ({row}: {row: Data}) => {
					return row.priceModification.filter(
						p => p.type === 'scope'
					)[0];
				}
			}}</ElTableColumn>
			<ElTableColumn label='操作'></ElTableColumn>
		</ElTable>
	);
});