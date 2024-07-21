import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  color?: StringNullableFilter;
  title?: StringNullableFilter;
  numberInStock?: IntNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  cartItems?: CartItemListRelationFilter;
};
