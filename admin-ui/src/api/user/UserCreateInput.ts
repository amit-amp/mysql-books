import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { RoleCreateNestedManyWithoutUsersInput } from "./RoleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  roles2?: RoleCreateNestedManyWithoutUsersInput;
  username: string;
};
