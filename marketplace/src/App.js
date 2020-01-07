import React, {useState} from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register"
import Categories from "./components/Categories"
import PrivateRoute from "./components/PrivateRoute";
import AddItem from "./components/AddItem";
import Form from "./components/NewItem";

function App() {
<<<<<<< HEAD
=======
  const [item, setItem] = useState([]);
>>>>>>> 097836a5dc413848438c9b6446a2c151c8785a17
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/protected" component={Categories} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Register} />
          <Route
            path="/addItem/:id"
            render={props => (
              <AddItem {...props} setItem={setItem} item={item} />
            )}
          />
          <Route path="/newItem" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
