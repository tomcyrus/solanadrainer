import { CartItemCreateNestedManyWithoutProductsInput } from "./CartItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  color?: string | null;
  title?: string | null;
  numberInStock?: number | null;
  description?: string | null;
  price?: number | null;
  cartItems?: CartItemCreateNestedManyWithoutProductsInput;
};
