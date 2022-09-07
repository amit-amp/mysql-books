import { Author } from "../author/Author";
import { Role } from "../role/Role";

export type User = {
  author?: Author | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  roles2?: Array<Role>;
  updatedAt: Date;
  username: string;
};
