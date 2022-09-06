import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type GenreWhereInput = {
  books?: BookListRelationFilter;
  id?: StringFilter;
};
