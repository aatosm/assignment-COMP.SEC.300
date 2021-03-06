import { useState } from 'react'
import './styles.scss'
import { useForm } from 'react-hook-form'
import { registerUser } from '../../lib/api'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [pwMatchError, setPwMatchError] = useState<boolean>(false)

  async function onSubmit(data: any) {
    if (data.password !== data.password2) {
      setPwMatchError(true)
    } else {
      setPwMatchError(false)
      const response = await registerUser(data)
      if (response.status === 200) {
        console.log(response.data.message)
      }
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
          {errors.email && <p className="error">Email is required</p>}
          <input type="email" {...register('email', { required: true })} />
          <label>Password</label>
          {errors.password && <p className="error">Password is required</p>}
          <input
            type="password"
            {...register('password', { required: true })}
          />
          <label>Re-type password</label>
          {(errors.password2 || pwMatchError) && (
            <p className="error">Passwords do not match</p>
          )}
          <input
            type="password"
            {...register('password2', { required: true })}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Register
