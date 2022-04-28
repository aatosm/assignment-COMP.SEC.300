import { useState, useEffect } from 'react'
import MainView from './views/MainView'
import AuthView from './views/AuthView'
import NavBar from './components/NavBar'
import { IUser } from './types/user'
import { getLoginState } from './lib/api'

const App = () => {
  const [authenticated, setAuth] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>({ id: '', email: '' })

  useEffect(() => {
    async function fetchAuthState() {
      const response = await getLoginState()
      if (response.data.isAuthenticated) {
        setAuth(true)
        setUser({ id: response.data.id, email: response.data.email })
      }
    }
    fetchAuthState()
  }, [])

  return (
    <div>
      <NavBar authenticated={authenticated} setAuth={setAuth} />
      <div style={{ padding: '40px 60px 60px 60px' }}>
        {authenticated ? (
          <MainView setAuth={setAuth} user={user} />
        ) : (
          <AuthView setAuth={setAuth} setUser={setUser} />
        )}
      </div>
    </div>
  )
}

export default App
