import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  users?: UserListRelationFilter;
};
