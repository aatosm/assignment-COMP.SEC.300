import { useState } from "react";
import MainView from './views/MainView';
import AuthView from './views/AuthView';

const App = () => {

  const [authenticated, setAuth] = useState(false);

  return (
    <div>
      { authenticated ? <MainView setAuth={ setAuth } /> : <AuthView setAuth={ setAuth } /> }
    </div>
  );
}

export default App;
