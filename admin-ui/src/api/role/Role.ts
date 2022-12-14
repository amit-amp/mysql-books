import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
  users?: Array<User>;
};
