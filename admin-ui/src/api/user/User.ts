import { Author } from "../author/Author";
import { JsonValue } from "type-fest";
import { Role } from "../role/Role";

export type User = {
  author?: Author | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  roles2?: Array<Role>;
  updatedAt: Date;
  username: string;
};
