import { Author as TAuthor } from "../api/author/Author";

export const AUTHOR_TITLE_FIELD = "fullName";

export const AuthorTitle = (record: TAuthor): string => {
  return record.fullName || record.id;
};
