import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
// import { createMuiTheme } from "@material-ui/core/styles";

const Register = props => {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const useStyles = makeStyles(theme => ({
    textField: {
      width: 375
    },
    register: {
    width: 33,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "auto",
  
}

  }));

  const classes = useStyles();

  const onSubmit = event => {
    event.preventDefault();

    axios
      .post("https://africanmarket2.herokuapp.com/api/auth/register", values)
      .then(response => {
        console.log(response, props);
        window.localStorage.setItem("token", response.data.token);
        props.history.push("/login");
      })
      .catch(error => console.log("Login Error", error.response));
  };

  return (
    <>
      <Paper elevation={0}>
        <div className={classes.register}>
          <form onSubmit={onSubmit}>
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
              name="email"
              label="Email"
              type="email"
              className={`${classes.textField} input`}
              margin="normal"
              variant="outlined"
              value={values.email}
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

            <Button
              type="submit"
              variant="contained"
              className="classes.button"
            >
              Register
            </Button>
            <Typography variant="subtitle2">Already signed up?</Typography>
            <Link to="/login">
              <Button color="primary" onClick={() => console.log("clicked")}>
                Log In
              </Button>
            </Link>
          </form>
        </div>
      </Paper>
    </>
  );
};
export default Register;
