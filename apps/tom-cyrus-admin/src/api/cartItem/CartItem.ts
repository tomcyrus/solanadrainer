import { User } from "../user/User";
import { Product } from "../product/Product";

export type CartItem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  user?: User | null;
  product?: Product | null;
};
