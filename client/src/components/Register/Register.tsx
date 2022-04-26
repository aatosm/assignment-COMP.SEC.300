import * as React from 'react'
import './styles.scss'
import { useForm } from 'react-hook-form'
import { registerUser } from '../../lib/api'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function onSubmit(data: any) {
    const response = await registerUser(data)
    if (response.status === 200) {
      console.log(response.data.message)
    }
  }

  return (
    <div className="register-container">
      <div className="register__title">
        <h3>Register new user</h3>
      </div>
      <div className="register__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input {...register('email', { required: true })} />
          <label>Password</label>
          <input {...register('password', { required: true })} />
          <label>Re-type password</label>
          <input {...register('password2', { required: true })} />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Register
