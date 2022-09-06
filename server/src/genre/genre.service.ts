import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GenreServiceBase } from "./base/genre.service.base";

@Injectable()
export class GenreService extends GenreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
