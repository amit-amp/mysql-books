import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoleWhereUniqueInput } from "src/role/RoleWhereUniqueInput";

@InputType()
class UserCreateNestedManyWithoutRolesInput {
  @Field(() => [RoleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoleWhereUniqueInput],
  })
  connect?: Array<RoleWhereUniqueInput>;
}
export { UserCreateNestedManyWithoutRolesInput };