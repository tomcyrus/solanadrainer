import { SortOrder } from "../../util/SortOrder";

export type PaystackPaymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reference?: SortOrder;
  amount?: SortOrder;
  paymentDate?: SortOrder;
  status?: SortOrder;
};
