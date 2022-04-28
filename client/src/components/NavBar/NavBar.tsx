import { logOutUser } from '../../lib/api'
import './styles.scss'

interface IProps {
  authenticated: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBar = (props: IProps) => {
  const { authenticated, setAuth } = props

  async function logOut() {
    const response = await logOutUser()
    if (response.status === 200) {
      setAuth(false)
    }
  }

  return (
    <div className="navbar">
      <div className="navbar__title">
        <h1>Reservation tool</h1>
      </div>
      {authenticated ? (
        <div className="navbar__logout" onClick={logOut}>
          <p>Log out</p>
        </div>
      ) : null}
    </div>
  )
}

export default NavBar
