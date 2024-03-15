import { defineComponent } from "vue";
import { ElTable, ElTableColumn } from 'element-plus';
import 'element-plus/dist/index.css';

export const elementPlus = defineComponent(() => {
	const data = [
		{
			property1: 1,
			property2: 0,
			property3: 6
		},
		{
			property1: 3,
			property2: 0,
			property3: 6
		},
		{
			property1: 2,
			property2: 0,
			property3: 6
		},
	];


	return () => <ElTable
		data={data}
		onCell-click={ () => {
			alert(1)
		} }
	>
		<ElTableColumn prop="property1" label="col1"></ElTableColumn>
		<ElTableColumn prop="property2" label="col2"></ElTableColumn>
		<ElTableColumn prop="property3" label="col3"></ElTableColumn>
	</ElTable>
});