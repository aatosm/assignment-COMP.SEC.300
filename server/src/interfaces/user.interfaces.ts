import { User } from "../models/user";

export interface CreateUserResponse {
  message: string,
  data: User
}