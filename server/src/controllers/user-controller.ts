import { Request, Response } from "express";
import passport = require("passport");
import { CreateUserResponse, UserData } from "../interfaces/user.interfaces";
import { fetchUsers, loginUser, passwordsMatch, registerUser } from "../services/user-service";

export async function getUsers(req: Request, res: Response) {
  const users = await fetchUsers();
  res.status(200).json(users);
}

export async function createUser(req: Request, res: Response) {
  const body = req.body;
  const user = await registerUser(body);
  const response: CreateUserResponse = {
    message: 'User created succesfully',
    data: user.toUserData()
  }
  res.status(200).json(response);
}

export async function getUserById(req: Request, res: Response) {
  
}