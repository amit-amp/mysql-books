import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { GenreUpdateManyWithoutBooksInput } from "./GenreUpdateManyWithoutBooksInput";

export type BookUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  genres?: GenreUpdateManyWithoutBooksInput;
};
