import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { GenreListRelationFilter } from "../genre/GenreListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookWhereInput = {
  author?: AuthorWhereUniqueInput;
  genres?: GenreListRelationFilter;
  id?: StringFilter;
};
