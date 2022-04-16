import * as React from "react";
import "./styles.scss";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //const onSubmit = (data) => console.log(data);

  return (
    <div className="login-container">
      <div className="login__title">
        <h3>Sign up</h3>
      </div>
      <div className="login__form">
        <form /* onSubmit={handleSubmit(onSubmit)}*/>
          <label>Email</label>
          <input {...register('email', { required: true })} />
          <label>Password</label>
          <input {...register('password', { required: true })} />
          <input type="submit" />
        </form>
      </div>
      <div>
        <p>OR</p>
        <a href="#">Sign in with Google</a>
      </div>
    </div>
  )
};

export default Login;