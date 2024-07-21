import { PaystackPayment as TPaystackPayment } from "../api/paystackPayment/PaystackPayment";

export const PAYSTACKPAYMENT_TITLE_FIELD = "reference";

export const PaystackPaymentTitle = (record: TPaystackPayment): string => {
  return record.reference?.toString() || String(record.id);
};
