import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartItemWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
