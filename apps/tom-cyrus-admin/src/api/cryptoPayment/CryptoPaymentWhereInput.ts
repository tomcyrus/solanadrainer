import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CryptoPaymentWhereInput = {
  id?: StringFilter;
  walletAddress?: StringNullableFilter;
  transactionId?: StringNullableFilter;
  amount?: FloatNullableFilter;
  paymentDate?: DateTimeNullableFilter;
};
