import { InputJsonValue } from "../../types";
import { PreOrderUpdateManyWithoutUsersInput } from "./PreOrderUpdateManyWithoutUsersInput";
import { CartItemUpdateManyWithoutUsersInput } from "./CartItemUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  preOrders?: PreOrderUpdateManyWithoutUsersInput;
  cartItems?: CartItemUpdateManyWithoutUsersInput;
};
