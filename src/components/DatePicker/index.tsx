import type { Ref } from "vue";
import { defineComponent } from "vue";
import { ElDatePicker } from "element-plus";
import styleLib from "@styles/lib.module.scss";

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
  format: string;
  time: Ref<string | [string, string]>;
  placeholder?: {
    default?: string;
    start?: string;
    end?: string;
  };
  rangeSeparator?: string;
}

export const DatePicker = defineComponent<Props>(
  props => {
    return () => (
      <div class={styleLib.componentWrapper}>
        <ElDatePicker
          v-model={props.time.value}
          type={props.type}
          format={props.format}
          valueFormat={props.format}
          placeholder={props.placeholder?.default}
          startPlaceholder={
            props.placeholder?.start
          }
          endPlaceholder={props.placeholder?.end}
          range-separator={props.rangeSeparator}
        ></ElDatePicker>
      </div>
    );
  },
  {
    props: [
      "format",
      "time",
      "placeholder",
      "rangeSeparator",
      "type",
    ],
  }
);
