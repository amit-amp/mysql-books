/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthorWhereUniqueInput } from "../../author/base/AuthorWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { GenreCreateNestedManyWithoutBooksInput } from "./GenreCreateNestedManyWithoutBooksInput";
@InputType()
class BookCreateInput {
  @ApiProperty({
    required: false,
    type: () => AuthorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AuthorWhereUniqueInput)
  @IsOptional()
  @Field(() => AuthorWhereUniqueInput, {
    nullable: true,
  })
  author?: AuthorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => GenreCreateNestedManyWithoutBooksInput,
  })
  @ValidateNested()
  @Type(() => GenreCreateNestedManyWithoutBooksInput)
  @IsOptional()
  @Field(() => GenreCreateNestedManyWithoutBooksInput, {
    nullable: true,
  })
  genres?: GenreCreateNestedManyWithoutBooksInput;
}
export { BookCreateInput };