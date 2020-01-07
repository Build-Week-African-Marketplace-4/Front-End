import React from 'react';
import { ListItemSecondaryAction } from '@material-ui/core';
import Axios from 'axios';

const AddItem = props => {
    const [item, addItem] = React.useState({
        name: "",
        price: "",
        city: "",
        country: "",
        user_id: ""
    })

    const handleChnage = e => {
        addItem({...item, [event.target.name]:[event.target.value]})
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(items)
        axios
            .post("https://africanmarket2.herokuapp.com/api/item", item)

            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userId", res.data.id)
            })
            .catch(error => console.log("Login Error", error.response));
    }
}