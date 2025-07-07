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
  infant: {
    title: "Infant",
  },
  toddler: {
    title: "Toddler",
  },
  preschooler: {
    title: "Preschooler",
  },
  medical_facility: {
    title: "의료 기관",
  },
  safety: {
    title: "안전",
  },
  resources: {
    title: "자료",
  },
};

export default meta;
