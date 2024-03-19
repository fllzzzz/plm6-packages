import { defineComponent, ref, watch } from "vue";
import { ElDatePicker } from "element-plus";
import { container } from "./styles.module.scss";

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

export const DatePicker = defineComponent<
  Props,
  Emits
>(
  (props, { emit }) => {
    const date = ref<string>();
    watch(date, value => emit("select", value));
    return () => (
      <div class={container}>
        <ElDatePicker
          v-model={date.value}
          type={props.type}
          clearable={
            props.clearable ? true : false
          }
          format={props.formate}
          valueFormat={props.formate}
        ></ElDatePicker>
      </div>
    );
  },
  { props: ["clearable", "formate", "type"] }
);
