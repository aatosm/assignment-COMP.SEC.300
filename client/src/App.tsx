import { useState } from 'react'
import MainView from './views/MainView'
import AuthView from './views/AuthView'
import { IUser } from './types/user'

const App = () => {
  const [authenticated, setAuth] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>({ id: '', email: '' })

  return (
    <div>
      {authenticated ? (
        <MainView setAuth={setAuth} user={user} />
      ) : (
        <AuthView setAuth={setAuth} setUser={setUser} />
      )}
    </div>
  )
}

export default App
