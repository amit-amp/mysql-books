import { BookCreateNestedManyWithoutGenresInput } from "./BookCreateNestedManyWithoutGenresInput";

export type GenreCreateInput = {
  books?: BookCreateNestedManyWithoutGenresInput;
};
