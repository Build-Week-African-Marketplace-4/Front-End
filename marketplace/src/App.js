import React, {useState} from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import PrivateRoute from "./components/PrivateRoute";
import AddItem from "./components/AddItem";
import Form from "./components/NewItem";
import ItemsList from "./components/ItemsList";

function App() {
  const [item, setItem] = useState([]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/protected" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Register} />
          <Route
            path="/addItem/:id"
            render={props => (
              <AddItem {...props} setItem={setItem} item={item} />
            )}
          />
          <Route path="/newItem" component={Form} />
          <Route path="/itemsList" component={ItemsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
