import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import axios from "axios"

const Login = props => {
  const [values, setValues] = React.useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      justifyContent: "center",
      margin: "auto"
    },
    margin: {
      margin: theme.spacing(1)
    },
    textField: {
      width: 200
    },
    button: {
      width: 100,
      marginTop: 0,
      marginLeft: 0,
      height: 55
    },
    buttons: {
      width: 100,
      marginTop: 16,
      marginLeft: 5,
      height: 55
    },
    text: {
      marginLeft: 5,
      width: 150,
      padding: 0
    },
    top: {
      display: "flex",
      justifyContent: "center"
    }
  }));

  const classes = useStyles();
  
  const onSubmit = event => {
    event.preventDefault();

    axios
      .post("https://africanmarket2.herokuapp.com/api/auth/login", values)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.login.id);
        props.history.push("/protected");
        console.log(response);
      })
      .catch(error => console.log("Login Error", error.response));
  };

  return (
    <>
      <Paper elevation={20}>
        <div className="login-form">
          <form className="form" className={classes.top} onSubmit={onSubmit}>
            <TextField
              name="username"
              label="Username"
              className={`${classes.textField} input`}
              className={classes.text}
              margin="normal"
              variant="outlined"
              value={values.username}
              onChange={handleChange}
            />
            <TextField
              name="password"
              label="Password"
              className={`${classes.textField} input`}
              className={classes.text}
              type="password"
              margin="normal"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.buttons}
              onClick={() => console.log("clicked")}
            >
              Log In
            </Button>
          </form>
          <Typography variant="subtitle2">Not signed up?</Typography>
          <Link to="/">
            <Button color="primary" type="submit" className={classes.button}>
              Register
            </Button>
          </Link>
        </div>
      </Paper>
    </>
  );
};
export default Login;
