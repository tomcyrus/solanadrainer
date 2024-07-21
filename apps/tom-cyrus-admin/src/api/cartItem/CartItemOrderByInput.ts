import { SortOrder } from "../../util/SortOrder";

export type CartItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  userId?: SortOrder;
  productId?: SortOrder;
};
