import { Book } from "../book/Book";
import { User } from "../user/User";

export type Author = {
  books?: Array<Book>;
  createdAt: Date;
  fullName: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
