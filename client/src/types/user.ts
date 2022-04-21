export interface IRegisterUser {
  email: string,
  password: string,
  password2: string
}

export interface ILoginUser {
  email: string,
  password: string
}

export interface IUser {
  id: string,
  email: string
}