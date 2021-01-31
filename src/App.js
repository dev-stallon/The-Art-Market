import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import Gallery from "./components/Gallery/index";
import Login from "./components/Login/index";
import SignUp from "./components/SignUp/index";
import NavigationBar from "./components/NavBar/index";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
