import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Box } from "@material-ui/core";
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



const ItemCard = props => {

  const classes = useStyles();

  return (
    <>
      <Formik
        validationSchema={Yup.object().shape({
        name: Yup.string().required("First Name is Required"),
        price: Yup.string().required("Price is Required"),            country: Yup.string().required("Country is Required"),
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
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </form>
    </Formik>
    </>
  );
}

export default ItemCard;