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
  newborn: {
    title: "신생아",
  },
  infant: {
    title: "영아",
  },
  toddler: {
    title: "걸음마",
  },
  preschooler: {
    title: "유아",
  },
  safety: {
    title: "안전",
  },
  resources: {
    title: "자료",
  },
};

export default meta;
