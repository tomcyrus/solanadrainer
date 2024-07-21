export type CryptoPayment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  walletAddress: string | null;
  transactionId: string | null;
  amount: number | null;
  paymentDate: Date | null;
};
