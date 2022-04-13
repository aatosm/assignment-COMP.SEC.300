import { Request, Response } from "express";
import { CreateUserResponse } from "../interfaces/user.interfaces";
import { fetchUsers, postUser } from "../services/user-service";

export async function getUsers(req: Request, res: Response) {
  const users = await fetchUsers();
  res.status(200).json(users);
}

export async function createUser(req: Request, res: Response) {
  const body = req.body;
  const user = await postUser(body);
  const response: CreateUserResponse = {
    message: 'User created succesfully',
    data: user
  }
  res.status(200).json(response);
}

export async function getUserById(req: Request, res: Response) {
  
}