import { defineComponent } from "vue";
import { ElDatePicker } from "element-plus";
import styles from "./index.module.scss";

export const DatePicker = defineComponent(() => {
  return () => (
    <date-picker class={styles.container}>
      <ElDatePicker></ElDatePicker>
    </date-picker>
  );
});
