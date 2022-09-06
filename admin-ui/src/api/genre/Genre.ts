import { Book } from "../book/Book";

export type Genre = {
  books?: Array<Book>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
