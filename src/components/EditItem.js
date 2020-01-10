import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button } from "@material-ui/core";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { CardHeader, Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

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
    textAlign: "center"
  }
}));

const initialUser = {
 name: null,
 price: null,
 city: null,
 country: null,
 description: null,
};

const EditItem = props => {
  const [editing, setEditing] = useState(false);
  const [userToEdit, setUserToEdit] = useState(initialUser);
  const classes = useStyles();
  const id = localStorage.getItem("userId");
  
  useEffect(() => {
       console.log(props);
    axiosWithAuth()
      .get(`api/item/${props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        setUserToEdit({ ...res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(props);
  const saveEdit = e => {
    e.preventDefault();
    Object.keys(userToEdit).forEach(property => {
      if (!userToEdit[property]) {
        delete userToEdit[property];
      }
    });
    console.log(userToEdit);
    axiosWithAuth()
      .put(`api/item/${props.match.params.id}`, userToEdit)
      .then(response => {
        console.log("put res data", response.data);
        props.history.push("/protected");
      });
  };
  const handleChange = event => {
    setUserToEdit({ ...userToEdit, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Formik
        validationSchema={Yup.object().shape({
          name: Yup.string().required("First Name is Required"),
          price: Yup.string().required("Price is Required"),
          country: Yup.string().required("Country is Required"),
          city: Yup.string().required("City is Required")
        })}
      >
        <form>
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
                    name="item name"
                    label="Item Name"
                    margin="normal"
                    variant="outlined"
                    value={props.name}
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
                    value={props.price}
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
                    value={props.city}
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
                    value={props.country}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    className={classes.TextField}
                    name="description"
                    label="Description"
                    margin="normal"
                    variant="outlined"
                    value={props.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Link to="/">
                  <Button
                    onClick={saveEdit}
                    variant="contained"
                    color="secondary"
                  >
                    Save
                  </Button>
                </Link>
              </Grid>
            </Box>
          </div>
        </form>
      </Formik>
    </>
  );
};

export default EditItem;
