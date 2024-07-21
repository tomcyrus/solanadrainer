import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartItemUpdateInput = {
  quantity?: number | null;
  user?: UserWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
