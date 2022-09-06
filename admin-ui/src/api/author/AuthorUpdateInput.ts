import { BookUpdateManyWithoutAuthorsInput } from "./BookUpdateManyWithoutAuthorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthorUpdateInput = {
  books?: BookUpdateManyWithoutAuthorsInput;
  fullName?: string | null;
  user?: UserWhereUniqueInput | null;
};
