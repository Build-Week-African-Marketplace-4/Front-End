import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Box } from "@material-ui/core";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center"
  },
  box: {
    margin: theme.spacing(2)
  },
  TextField: {
    width: "96%",
    height: "100%"
  },
  TextFields: {
    width: "98%",
    height: "100%"
  },
  paper: {
    textAlign: "center",
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Form = props => {
  const [values, setValues] = React.useState({
    name: null,
    price: null,
    city: null,
    country: null,
  });
  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const classes = useStyles();

  const onSubmit = event => {
    event.preventDefault();

    Object.keys(values).forEach(property => {
      if (!values[property]) {
        delete values[property];
      }
    });
    axiosWithAuth
    .post("api/item", values)
      .then(response => {
        console.log(response, props);
        // localStorage.setItem("token");
        props.history.push("/itemList");
      })
      .catch(error => console.log("Creating Item Error", error.response));
  };

  return (
    <Formik
      validationSchema={Yup.object().shape({
        name: Yup.string().required("First Name is Required"),
        price: Yup.string().required("Price is Required"),
        country: Yup.string().required("Country is Required"),
        city: Yup.string().required("City is Required")
      })}
    >
      <form onSubmit={onSubmit}>
          <div>
              <h1>Sell An Item!</h1>
          </div>
        <div className={classes.root}>
          <Box
            border={1}
            borderRadius={6}
            width={400}
            p={2}
            className={classes.box}
          >
            <Grid container spacing={2} className={classes.root}>
              <Grid xs={6}>
                <TextField
                  className={classes.TextField}
                  name="name"
                  label="Item Name"
                  margin="normal"
                  variant="outlined"
                  value={values.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  className={classes.TextField}
                  name="price"
                  label="Price"
                  margin="normal"
                  variant="outlined"
                  value={values.price}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  className={classes.TextField}
                  name="city"
                  label="City"
                  variant="outlined"
                  margin="normal"
                  value={values.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  className={classes.TextField}
                  name="country"
                  label="Country"
                  variant="outlined"
                  margin="normal"
                  value={values.country}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
        <Link to="/confirm">
          <Button 
          type="submit" 
          variant="contained" 
          color=""
          textDecoration="none"
          >
            Submit!
          </Button>
        </Link>
      </form>
    </Formik>
  );
};

export default Form;
