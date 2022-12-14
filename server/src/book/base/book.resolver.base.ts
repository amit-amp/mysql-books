/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateBookArgs } from "./CreateBookArgs";
import { UpdateBookArgs } from "./UpdateBookArgs";
import { DeleteBookArgs } from "./DeleteBookArgs";
import { BookFindManyArgs } from "./BookFindManyArgs";
import { BookFindUniqueArgs } from "./BookFindUniqueArgs";
import { Book } from "./Book";
import { GenreFindManyArgs } from "../../genre/base/GenreFindManyArgs";
import { Genre } from "../../genre/base/Genre";
import { Author } from "../../author/base/Author";
import { BookService } from "../book.service";

@graphql.Resolver(() => Book)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BookResolverBase {
  constructor(
    protected readonly service: BookService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Book",
    action: "read",
    possession: "any",
  })
  async _booksMeta(
    @graphql.Args() args: BookFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Book])
  @nestAccessControl.UseRoles({
    resource: "Book",
    action: "read",
    possession: "any",
  })
  async books(@graphql.Args() args: BookFindManyArgs): Promise<Book[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Book, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Book",
    action: "read",
    possession: "own",
  })
  async book(@graphql.Args() args: BookFindUniqueArgs): Promise<Book | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Book)
  @nestAccessControl.UseRoles({
    resource: "Book",
    action: "create",
    possession: "any",
  })
  async createBook(@graphql.Args() args: CreateBookArgs): Promise<Book> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        author: args.data.author
          ? {
              connect: args.data.author,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Book)
  @nestAccessControl.UseRoles({
    resource: "Book",
    action: "update",
    possession: "any",
  })
  async updateBook(@graphql.Args() args: UpdateBookArgs): Promise<Book | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          author: args.data.author
            ? {
                connect: args.data.author,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Book)
  @nestAccessControl.UseRoles({
    resource: "Book",
    action: "delete",
    possession: "any",
  })
  async deleteBook(@graphql.Args() args: DeleteBookArgs): Promise<Book | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Genre])
  @nestAccessControl.UseRoles({
    resource: "Genre",
    action: "read",
    possession: "any",
  })
  async genres(
    @graphql.Parent() parent: Book,
    @graphql.Args() args: GenreFindManyArgs
  ): Promise<Genre[]> {
    const results = await this.service.findGenres(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Author, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "read",
    possession: "any",
  })
  async author(@graphql.Parent() parent: Book): Promise<Author | null> {
    const result = await this.service.getAuthor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
