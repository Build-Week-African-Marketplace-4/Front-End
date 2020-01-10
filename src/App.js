import React, {useState} from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import PrivateRoute from "./components/PrivateRoute";
import NewItem from "./components/NewItem";
import ItemsList from "./components/ItemsList";
import Navigation from "./components/Navigation";
import UserItemCard from "./components/UserItemCard"
import EditItem from "./components/EditItem"
import EditList from "./components/EditList"

function App(props) {
  const [item, setItem] = useState([]);
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Switch>
          <PrivateRoute path="/protected" component={Dashboard} />
          <PrivateRoute
            path="/newItem"
            component={NewItem}
            {...props} setItem={setItem} item={item}
            />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Register} />
          <Route path="/itemsList" component={ItemsList} />
          <Route
            path="/protected/:id"
            render={props => (
              <UserItemCard {...props} setItem={setItem} item={item} />
            )}
          />
          <Route
            path="/editItem/:id"
            render={props => (
              <EditItem {...props} setItem={setItem} item={item} />
            )}
          />
          <Route
            path="/editItem/:id"
            render={props => (
              <EditList {...props} setItem={setItem} item={item} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
