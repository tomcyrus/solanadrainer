export type CryptoPaymentCreateInput = {
  walletAddress?: string | null;
  transactionId?: string | null;
  amount?: number | null;
  paymentDate?: Date | null;
};
