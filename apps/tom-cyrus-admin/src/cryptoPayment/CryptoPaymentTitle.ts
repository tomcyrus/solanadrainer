import { CryptoPayment as TCryptoPayment } from "../api/cryptoPayment/CryptoPayment";

export const CRYPTOPAYMENT_TITLE_FIELD = "walletAddress";

export const CryptoPaymentTitle = (record: TCryptoPayment): string => {
  return record.walletAddress?.toString() || String(record.id);
};
