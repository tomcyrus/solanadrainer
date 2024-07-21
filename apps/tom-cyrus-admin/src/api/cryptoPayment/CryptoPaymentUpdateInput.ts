export type CryptoPaymentUpdateInput = {
  walletAddress?: string | null;
  transactionId?: string | null;
  amount?: number | null;
  paymentDate?: Date | null;
};
