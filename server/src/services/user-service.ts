import { User } from "../models/user";
import * as bcrypt from 'bcrypt';

export async function fetchUsers() {
  return await User.find();
}

export async function registerUser(body) {
  await validateRegistration(body);
  const hashedPassword = await hashPassword(body.password);
  return await User.create({
    email: body.email,
    name: body.name,
    password: hashedPassword
  }).save();
}

export async function loginUser(body) {
  return await User.findOne({ email: body.email });
}

export async function passwordsMatch(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
}

async function validateRegistration(body) {
  const { email, name, password, password2 } = body;
  if (password !== password2) {
    //
  }
}