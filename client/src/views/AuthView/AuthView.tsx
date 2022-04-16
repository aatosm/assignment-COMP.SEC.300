import Login from '../../components/Login'
import Register from '../../components/Register'

interface IProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthView = (props: IProps) => {
  const { setAuth } = props;
  return (
    <div>
      <Register />
      <Login setAuth={ setAuth } />
    </div>
  )
}

export default AuthView;