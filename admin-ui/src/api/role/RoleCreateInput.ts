import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name: string;
  users?: UserCreateNestedManyWithoutRolesInput;
};
