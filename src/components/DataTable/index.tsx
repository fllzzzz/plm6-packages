import type { VNode } from "vue";
import { defineComponent } from "vue";
import {
  ElTable,
  ElTableColumn,
} from "element-plus";

interface Configure<T> {
  props?: Props;
  data: T[];
  contextMap: Map<
    string,
    (ctx: Context<T>) => VNode | void
  >;
}

interface Props {
}

interface Context<T> {
  row: T;
  column: unknown;
  index: number;
}

export const generateDataTable = <
  T extends Record<string, any>
>(
  configure: Configure<T>
) =>
  defineComponent<typeof configure.props>(
    props => {
      return () => (
        <ElTable data={configure.data} border maxHeight={'100vh'}>
          {Array.from(
            configure.contextMap.entries()
          ).map(ctx => (
            <ElTableColumn label={ctx[0]}>
              {{
                default: ({
                  row,
                  column,
                  $index: index,
                }) =>
                  ctx[1]({ row, column, index }),
              }}
            </ElTableColumn>
          ))}
        </ElTable>
      );
    },
    { props: [] }
  );
