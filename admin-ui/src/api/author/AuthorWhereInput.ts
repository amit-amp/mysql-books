import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuthorWhereInput = {
  books?: BookListRelationFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
