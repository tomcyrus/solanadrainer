import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaystackPaymentWhereInput = {
  id?: StringFilter;
  reference?: StringNullableFilter;
  amount?: FloatNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  status?: "Option1";
};
