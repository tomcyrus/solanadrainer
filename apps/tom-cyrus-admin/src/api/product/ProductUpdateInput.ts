import { CartItemUpdateManyWithoutProductsInput } from "./CartItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  color?: string | null;
  title?: string | null;
  numberInStock?: number | null;
  description?: string | null;
  price?: number | null;
  cartItems?: CartItemUpdateManyWithoutProductsInput;
};
