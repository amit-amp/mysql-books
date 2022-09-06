import { Author } from "../author/Author";
import { Genre } from "../genre/Genre";

export type Book = {
  author?: Author | null;
  createdAt: Date;
  genres?: Array<Genre>;
  id: string;
  updatedAt: Date;
};
