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
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column"
    },
    textField: {
      width: 375
    },
  }));

//   const theme = createMuiTheme({
//     palette: {
//       primary: {
//         light: "#757ce8",
//         main: "#3f50b5",
//         dark: "#002884",
//         contrastText: "#fff"
//       },
//       secondary: {
//         light: "#ff7961",
//         main: "#f44336",
//         dark: "#ba000d",
//         contrastText: "#000"
//       }
//     }
//   });

  const classes = useStyles();

  const onSubmit = event => {
    event.preventDefault();

    axios
      .post("https://africanmarket2.herokuapp.com/api/auth/register", values)
      .then(response => {
        console.log(response, props);
        // localStorage.setItem("token");
        props.history.push("/login");
      })
      .catch(error => console.log("Login Error", error.response));
  };

  return (
    <>
      <Paper>
        <div className="register">
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
              className="button"
            >
              Register
            </Button>
          </form>

          <div className="login">
            <Typography variant="subtitle2">Already signed up?</Typography>
            <Link to="/login">
              <Button color="primary" onClick={() => console.log("clicked")}>
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </Paper>
    </>
  );
};
export default Register;
