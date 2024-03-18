import { defineComponent, ref, watch } from "vue";
import { ElDatePicker } from "element-plus";

interface Props {
	type:
		| "year"
		| "years"
		| "month"
		| "date"
		| "dates"
		| "datetime"
		| "week"
		| "datetimerange"
		| "daterange"
		| "monthrange";
	formate: string;
	clearable?: boolean;
}

type Emits = {
	select: (date: string) => boolean;
};

export const Date = defineComponent<Props, Emits>(
	(props, { emit }) => {
		const date = ref<string>();
		watch(date, value => emit("select", value));
		return () => (
			<ElDatePicker
				v-model={date}
				type={props.type}
				clearable={props.clearable}
				format={props.formate}
				valueFormat={props.formate}
			></ElDatePicker>
		);
	}
);
