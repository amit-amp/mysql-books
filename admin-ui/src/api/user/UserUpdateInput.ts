import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { RoleUpdateManyWithoutUsersInput } from "./RoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  roles2?: RoleUpdateManyWithoutUsersInput;
  username?: string;
};
