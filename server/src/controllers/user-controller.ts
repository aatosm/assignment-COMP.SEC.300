import { Request, Response } from 'express'
import { CreateUserResponse, UserData } from '../interfaces/user.interfaces'
import { fetchUsers, registerUser } from '../services/user-service'

export async function getUsers(req: Request, res: Response) {
  const users = await fetchUsers()
  const response: UserData[] = users.map((user) => {
    return <UserData>{
      id: user.id,
      email: user.email,
      name: user.name,
    }
  })
  res.status(200).json(response)
}

export async function createUser(req: Request, res: Response) {
  const body = req.body
  const user = await registerUser(body)
  const response: CreateUserResponse = {
    message: 'User created succesfully',
    data: user.toUserData(),
  }
  res.status(200).json(response)
}

export async function getUserById(req: Request, res: Response) {}
