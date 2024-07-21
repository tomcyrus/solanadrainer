import { InputJsonValue } from "../../types";
import { PreOrderCreateNestedManyWithoutUsersInput } from "./PreOrderCreateNestedManyWithoutUsersInput";
import { CartItemCreateNestedManyWithoutUsersInput } from "./CartItemCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  preOrders?: PreOrderCreateNestedManyWithoutUsersInput;
  cartItems?: CartItemCreateNestedManyWithoutUsersInput;
};
