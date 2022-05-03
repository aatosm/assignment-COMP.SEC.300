import * as React from 'react'
import './styles.scss'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../lib/api'
import { IUser } from '../../types/user'

interface IProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
  setUser: React.Dispatch<React.SetStateAction<IUser>>
}

const Login = (props: IProps) => {
  const { setAuth, setUser } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function onSubmit(data: any) {
    const response = await loginUser(data)
    if (response.status === 200) {
      const { id, email } = response.data.user
      setAuth(true)
      setUser({
        id,
        email,
      })
    }
  }

  return (
    <div className="login-container">
      <div className="login__title">
        <h3>Sign up</h3>
      </div>
      <div className="login__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          {errors.email && <p className="error">Email is required</p>}
          <input type="email" {...register('email', { required: true })} />
          <label>Password</label>
          {errors.password && <p className="error">Password is required</p>}
          <input
            type="password"
            {...register('password', { required: true })}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Login
