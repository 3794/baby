import type { MetaRecord } from "nextra";

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  pregnancy: {
    title: "임신",
  },
  birth: {
    title: "출산",
  },
  childcare: {
    title: "육아",
  },
  resources: {
    title: "자료",
  },
};

export default meta;
