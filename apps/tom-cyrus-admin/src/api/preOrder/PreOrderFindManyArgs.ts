import { PreOrderWhereInput } from "./PreOrderWhereInput";
import { PreOrderOrderByInput } from "./PreOrderOrderByInput";

export type PreOrderFindManyArgs = {
  where?: PreOrderWhereInput;
  orderBy?: Array<PreOrderOrderByInput>;
  skip?: number;
  take?: number;
};
