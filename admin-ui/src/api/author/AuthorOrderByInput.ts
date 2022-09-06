import { SortOrder } from "../../util/SortOrder";

export type AuthorOrderByInput = {
  createdAt?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
