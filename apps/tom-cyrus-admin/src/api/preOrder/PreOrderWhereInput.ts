import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PreOrderWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  designFile?: JsonFilter;
  description?: StringNullableFilter;
  preOrderDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
