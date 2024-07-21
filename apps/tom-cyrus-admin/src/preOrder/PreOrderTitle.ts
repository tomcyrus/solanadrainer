import { PreOrder as TPreOrder } from "../api/preOrder/PreOrder";

export const PREORDER_TITLE_FIELD = "location";

export const PreOrderTitle = (record: TPreOrder): string => {
  return record.location?.toString() || String(record.id);
};
