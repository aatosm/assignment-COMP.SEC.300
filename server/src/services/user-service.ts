import { User } from "../models/user";

export async function fetchUsers() {
  const users = await User.find();
  return users;
}

export async function postUser(body) {
  return await User.create({
    email: body.email,
    name: body.name
  }).save();
}