import { useState } from "react";
import MainView from './views/MainView';
import AuthView from './views/AuthView';

const App = () => {

  const [authenticated, setAuth] = useState(false);

  return (
    <div>
      { authenticated ? <MainView /> : <AuthView /> }
      <MainView />
    </div>
  );
}

export default App;
