import { generateDataTable } from '@components/DataTable';
import { defineComponent, h } from 'vue';

const data = [
	{
		T: 10
	},
	{
		T: 10
	},
	{
		T: 10
	},
];



export const DataTable = generateDataTable<typeof data[0]>({
	data,
	contextMap: new Map([
		['第一列', ({row, column, index}) => <span>{row.T}</span>],
	]),
});

export const default_ = <DataTable></DataTable>