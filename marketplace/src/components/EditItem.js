import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Box } from "@material-ui/core";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { Button } from "@material-ui/core";
import { Fab, Card } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons";

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
  user_id: Number(localStorage.getItem("userId"))
};

const NewItem = props => {
  const [editing, setEditing] = useState(false);
  const classes = useStyles();
  
  const deleteCard = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`api/item/${props.id}`)
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = event => {
    setEditing({ ...editing, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <div className={classes.root}>
        <Card
          action=
          {
            <div>
              <Fab
                type="button"
                size="small"
                color="secondary"
                aria-label="edit"
                className={classes.fab}
                onClick={e => {
                  e.preventDefault();
                  setEditing(true);
                }}
              >
                <EditIcon />
              </Fab>

              <IconButton
                size="small"
                color="primary"
                aria-label="delete"
                className={classes.fab}
                onClick={deleteCard}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          }
          />
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
                value={setEditing.name}
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
                value={setEditing.price}
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
                value={setEditing.city}
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
                value={setEditing.country}
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
                value={setEditing.description}
                onChange={handleChange}
              />
            </Grid>
            <button>Edit</button>
            <button>Delete</button>
          </Grid>
        </Box>
      </div>
      <Button
        type="submit"
        variant="contained"
        color=""
        textDecoration="none"
      >
        Submit!
      </Button>
    </form>
  );
};

export default NewItem;
