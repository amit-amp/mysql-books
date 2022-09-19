import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { RoleUpdateManyWithoutUsersInput } from "./RoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  roles2?: RoleUpdateManyWithoutUsersInput;
  username?: string;
};
