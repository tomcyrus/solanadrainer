import { JsonValue } from "type-fest";
import { PreOrder } from "../preOrder/PreOrder";
import { CartItem } from "../cartItem/CartItem";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  preOrders?: Array<PreOrder>;
  cartItems?: Array<CartItem>;
};
