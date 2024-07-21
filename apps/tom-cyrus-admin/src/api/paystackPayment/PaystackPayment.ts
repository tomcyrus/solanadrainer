export type PaystackPayment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reference: string | null;
  amount: number | null;
  paymentDate: Date | null;
  status?: "Option1" | null;
};
