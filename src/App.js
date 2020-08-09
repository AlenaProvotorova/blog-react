import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import SignUp from "./pages/SingUp";
import SignIn from "./pages/SingIn";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path={"/"} exact component={SignUp} />
          <Route path={"/about"} component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
