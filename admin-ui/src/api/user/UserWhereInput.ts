import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";

export type UserWhereInput = {
  author?: AuthorWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  roles2?: RoleListRelationFilter;
  username?: StringFilter;
};
