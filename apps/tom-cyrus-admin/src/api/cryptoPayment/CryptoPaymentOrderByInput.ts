import { SortOrder } from "../../util/SortOrder";

export type CryptoPaymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  walletAddress?: SortOrder;
  transactionId?: SortOrder;
  amount?: SortOrder;
  paymentDate?: SortOrder;
};
