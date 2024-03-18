import { defineComponent, h } from "vue";
import { processLibrary } from "./card";

export const view = defineComponent(() => {
  const result: Array<typeof processLibrary> = [];
  for (let index = 0; index < 2; index++) {
    result.push(processLibrary);
  }

  return () => <div>
	{result.map(comp => h(comp))}
  </div>;
});
