import React, { useState, useEffect } from "react";
import EditItem from "./EditItem";
import axiosWithAuth from "../utils/AxiosWithAuth";

const divStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexFlow: "wrap"
};

export default function Dashboard() {
  const [items, userItems] = useState([]);
  const id = localStorage.getItem("userId");

  useEffect(effect => {
    axiosWithAuth()
      .get(`api/item/${id}`)
      .then(response => {
        console.log("This is the response", response);
        userItems(response.data);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <>
      <div style={divStyle}>
        {items.map(item => (
          <EditItem
            id= {item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            city={item.city}
            country={item.country}
          />
        ))}
      </div>
    </>
  );
}
