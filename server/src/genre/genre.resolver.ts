import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GenreResolverBase } from "./base/genre.resolver.base";
import { Genre } from "./base/Genre";
import { GenreService } from "./genre.service";

@graphql.Resolver(() => Genre)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GenreResolver extends GenreResolverBase {
  constructor(
    protected readonly service: GenreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
