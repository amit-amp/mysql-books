import { BookCreateNestedManyWithoutAuthorsInput } from "./BookCreateNestedManyWithoutAuthorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthorCreateInput = {
  books?: BookCreateNestedManyWithoutAuthorsInput;
  fullName?: string | null;
  user?: UserWhereUniqueInput | null;
};
