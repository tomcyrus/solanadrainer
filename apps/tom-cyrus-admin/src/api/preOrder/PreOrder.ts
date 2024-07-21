import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type PreOrder = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  location: string | null;
  designFile: JsonValue;
  description: string | null;
  preOrderDate: Date | null;
  user?: User | null;
};
