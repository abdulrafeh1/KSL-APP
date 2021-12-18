import { Switch, Route } from "react-router-dom";

import Home from "./components/home/home";
import Login from "./components/login/Login";
import Managers from "./components/managers/managers";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/managers">
          <Managers />
        </Route>

        <Route path="/requests">
          <Home />
        </Route>

        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
