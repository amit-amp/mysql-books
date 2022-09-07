import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoleWhereUniqueInput } from "src/role/RoleWhereUniqueInput";

@InputType()
class UserUpdateManyWithoutRolesInput {
  @Field(() => [RoleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoleWhereUniqueInput],
  })
  connect?: Array<RoleWhereUniqueInput>;

  @Field(() => [RoleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoleWhereUniqueInput],
  })
  disconnect?: Array<RoleWhereUniqueInput>;

  @Field(() => [RoleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoleWhereUniqueInput],
  })
  set?: Array<RoleWhereUniqueInput>;
}
export { UserUpdateManyWithoutRolesInput };