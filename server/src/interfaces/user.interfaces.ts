export interface UserData {
  id: string
  email: string
  name: string
}

export interface CreateUserResponse {
  message: string
  data: UserData
}
