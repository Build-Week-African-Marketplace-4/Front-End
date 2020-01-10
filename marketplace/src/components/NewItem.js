import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Box } from "@material-ui/core";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";
import { Link } from "@material-ui/core"

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

const newItem = {
  name: null,
  price: null,
  city: null,
  country: null,
  description: null,
  user_id: Number(localStorage.getItem("userId"))
}

const NewItem = props => {
  const [userToEdit, setUserToEdit] = useState(newItem);
  const classes = useStyles();

  const saveEdit = e => {
    e.preventDefault();
    Object.keys(userToEdit).forEach(property => {
      if (!userToEdit[property]) {
        delete userToEdit[property];
      }
    });
    console.log(userToEdit)
    axiosWithAuth()
    .post("api/item", userToEdit)
      .then(response => {
        console.log("posting", response.data);
        props.history.push(`/protected`);
      })
      .catch(error => console.log("Creating Item Error", error.response));
  };

  const handleChange = event => {
    setUserToEdit({ ...userToEdit, [event.target.name]: event.target.value });
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
      <form>
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
                  value={userToEdit.name}
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
                  value={userToEdit.price}
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
                  value={userToEdit.city}
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
                  value={userToEdit.country}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  className={classes.TextField}
                  name="description"
                  label="Description"
                  variant="outlined"
                  margin="normal"
                  value={userToEdit.description}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
        <Button
          type="submit"
          variant="contained"
          color=""
          textDecoration="none"
          onClick={saveEdit}
        >
          Submit!
        </Button>
      </form>
    </Formik>
  );
};

export default NewItem