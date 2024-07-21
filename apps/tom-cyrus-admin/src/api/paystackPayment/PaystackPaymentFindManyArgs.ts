import { PaystackPaymentWhereInput } from "./PaystackPaymentWhereInput";
import { PaystackPaymentOrderByInput } from "./PaystackPaymentOrderByInput";

export type PaystackPaymentFindManyArgs = {
  where?: PaystackPaymentWhereInput;
  orderBy?: Array<PaystackPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
