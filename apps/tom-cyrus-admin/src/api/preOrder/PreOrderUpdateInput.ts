import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PreOrderUpdateInput = {
  location?: string | null;
  designFile?: InputJsonValue;
  description?: string | null;
  preOrderDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
