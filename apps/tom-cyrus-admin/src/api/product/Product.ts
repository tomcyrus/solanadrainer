import { CartItem } from "../cartItem/CartItem";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  color: string | null;
  title: string | null;
  numberInStock: number | null;
  description: string | null;
  price: number | null;
  cartItems?: Array<CartItem>;
};
