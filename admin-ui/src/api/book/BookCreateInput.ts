import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { GenreCreateNestedManyWithoutBooksInput } from "./GenreCreateNestedManyWithoutBooksInput";

export type BookCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  genres?: GenreCreateNestedManyWithoutBooksInput;
};
