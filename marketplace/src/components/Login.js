import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const Login = props => {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      justifyContent: "center",
      margin: "auto",
    },
    textField: {
      width: 200
    }
  }));

  const classes = useStyles();
  
  const onSubmit = event => {
    event.preventDefault();
    console.log(values);
    axios
      .post(" https://africanmarket2.herokuapp.com/api/auth/login", values)

      .then(response => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.id);
        props.history.push("/protected");
      })
      .catch(error => console.log("Login Error", error.response));
  };

  return (
    <>
      <Paper>
        <div className="login-form">
          <form className="form" onSubmit={onSubmit}>
            <TextField
              name="username"
              label="Username"
              className={`${classes.textField} input`}
              margin="normal"
              variant="outlined"
              value={values.username}
              onChange={handleChange}
            />
            <TextField
              name="password"
              label="Password"
              className={`${classes.textField} input`}
              type="password"
              margin="normal"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
            />
          </form>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Log In
            </Button>
            <Typography variant="subtitle2">Not signed up?</Typography>
            <Link to="/">
              <Button color="primary" className={classes.button}>
                Register
              </Button>
            </Link>
          </div>
        </div>
      </Paper>
    </>
  );
};
export default Login;
