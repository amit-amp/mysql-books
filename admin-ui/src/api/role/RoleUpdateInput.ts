import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string;
  users?: UserUpdateManyWithoutRolesInput;
};
