import { Field, ObjectType } from "@nestjs/graphql";
import { Role } from "src/role/Role";
// @ts-ignore
// eslint-disable-next-line
import { User } from "../user/user";

@ObjectType()
export class UserInfo implements Partial<User> {
  @Field(() => String)
  username!: string;
  @Field(() => [Role])
  roles!: Role[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
