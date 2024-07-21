import { CryptoPaymentWhereInput } from "./CryptoPaymentWhereInput";
import { CryptoPaymentOrderByInput } from "./CryptoPaymentOrderByInput";

export type CryptoPaymentFindManyArgs = {
  where?: CryptoPaymentWhereInput;
  orderBy?: Array<CryptoPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
