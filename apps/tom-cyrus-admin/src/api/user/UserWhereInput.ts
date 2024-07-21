import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PreOrderListRelationFilter } from "../preOrder/PreOrderListRelationFilter";
import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  preOrders?: PreOrderListRelationFilter;
  cartItems?: CartItemListRelationFilter;
};
