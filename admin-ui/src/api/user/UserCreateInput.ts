import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { RoleCreateNestedManyWithoutUsersInput } from "./RoleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  roles2?: RoleCreateNestedManyWithoutUsersInput;
  username: string;
};
