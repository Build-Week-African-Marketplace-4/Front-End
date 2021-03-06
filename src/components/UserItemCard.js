import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Box } from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button } from "@material-ui/core";
import axiosWithAuth from "../utils/AxiosWithAuth";
import {
  Card,
  CardHeader,
  Fab,
} from "@material-ui/core";
import {Link} from "react-router-dom"
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

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
  },
}));

const UserItemCard = props => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
  const [event, setEvent] = useState(props.event);

  const handleChange = event => {
    setEvent(event.target.value);
  };

  const deleteItem = e => {
    e.preventDefault();
    console.log(deleteItem);
    axiosWithAuth()
      .delete(`api/item/${props.id}`)
      .then(() => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
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
              <CardHeader
                action={
                  <div className={classes.header}>
                    <Link to={`/editItem/${props.id}`}>
                      <IconButton size="small" color="secondary">
                        <EditIcon />
                      </IconButton>
                    </Link>

                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="delete"
                      className={classes.fab}
                      onClick={deleteItem}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                }
              />
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
              </Grid>
            </Box>
          </div>
        </form>
      </Formik>
    </>
  );
};

export default UserItemCard;
