import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
