import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type UserUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
