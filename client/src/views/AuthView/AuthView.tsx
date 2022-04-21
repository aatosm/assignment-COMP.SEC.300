import Login from '../../components/Login'
import Register from '../../components/Register'
import { IUser } from '../../types/user'

interface IProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>,
  setUser: React.Dispatch<React.SetStateAction<IUser>>
}

const AuthView = (props: IProps) => {
  const { setAuth, setUser } = props;
  return (
    <div>
      <Register />
      <Login setAuth={ setAuth } setUser={ setUser } />
    </div>
  )
}

export default AuthView;