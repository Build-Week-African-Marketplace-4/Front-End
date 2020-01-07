import React, { useState } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Box, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  box: {
    margin: theme.spacing(2)
  },
  TextField: {
    width: "100%",
    height: "100%"
  },
  paper: {
    textAlign: "center",
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const theme = {
  spacing: value => value ** 2
};

const newItem = {
    name: null,
    price: null,
    city: null,
    country: null,
    user_id: Number(localStorage.getItem("userId"))

}
const AddItem = props => {
const [item, addItem] = useState(newItem)
const [userToEdit, setUserToEdit] = useState(newItem);

    const handleChange = e => {
        addItem({...item, [e.target.name]:[e.target.value]})
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(item)
        axiosWithAuth
            .post("https://africanmarket2.herokuapp.com/api/item/:id", item)

            .then(res => {
                console.log(res.data)
                console.log("post response data", res.data);
                props.history.push("/protected");
            })
            .catch(error => console.log("Login Error", error.response));
    }

//   const saveEdit = e => {
//     e.preventDefault();
//     Object.keys(userToEdit).forEach(property => {
//       if (!userToEdit[property]) {
//         delete userToEdit[property];
//       }
//     });
//     console.log(userToEdit);
//     AxiosWithAuth()
//       .post(`api/cards/`, userToEdit)
//       .then(response => {
//         console.log("post res data", response.data);
//         props.history.push("/protected");
//       });
//   };
//   const handleChange = event => {
//     setUserToEdit({ ...userToEdit, [event.target.name]: event.target.value });
//   };
//   console.log("params", props.match.params.id);
  const classes = useStyles();

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.root}>
        <Box
          border={1}
          borderRadius={6}
          width={500}
          p={2}
          className={classes.box}
        >
          <Grid container spacing={1} className={classes.root}>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="name"
                  label="First Name"
                  margin="normal"
                  variant="outlined"
                  value={userToEdit.name}
                  onChange={handleChange}
                />
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="price"
                  label="Price"
                  variant="outlined"
                  margin="normal"
                  value={userToEdit.price}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  value={userToEdit.city}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="country"
                  label="Country"
                  variant="outlined"
                  fullWidth
                  value={userToEdit.country}
                  onChange={handleChange}
                />
              </div>
            </Grid>
          </Grid>
          <div className="buttons">
            {/* <Button onClick={saveEdit} variant="contained" color="primary">
              Save
            </Button> */}
          </div>
        </Box>
      </div>
    </form>
  );
};
export default AddItem;