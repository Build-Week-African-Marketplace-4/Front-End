import React from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register"
import Categories from "./components/Categories"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/protected" component={Categories} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
