import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "src/user/base/UserWhereUniqueInput";
@InputType()
class RoleCreateNestedManyWithoutUsersInput {
  @Field(() => [UserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserWhereUniqueInput],
  })
  connect?: Array<UserWhereUniqueInput>;
}
export { RoleCreateNestedManyWithoutUsersInput };