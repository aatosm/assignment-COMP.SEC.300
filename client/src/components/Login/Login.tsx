import * as React from "react";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { loginUser } from "../../lib/api";

interface IProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = (props: IProps) => {
  const { setAuth } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    const response = await loginUser(data);
    if (response.status === 200) {
      console.log(response);
      setAuth(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login__title">
        <h3>Sign up</h3>
      </div>
      <div className="login__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input {...register('email', { required: true })} />
          <label>Password</label>
          <input {...register('password', { required: true })} />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
};

export default Login;