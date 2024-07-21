import { SortOrder } from "../../util/SortOrder";

export type PreOrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  location?: SortOrder;
  designFile?: SortOrder;
  description?: SortOrder;
  preOrderDate?: SortOrder;
  userId?: SortOrder;
};
