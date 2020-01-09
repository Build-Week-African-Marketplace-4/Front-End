import React, {useState, useEffect} from 'react';
import ItemCard from './ItemCards';
import NewItem from './NewItem';
import { Button } from "@material-ui/core";
import axiosWithAuth from '../utils/AxiosWithAuth';
import { Link } from "react-router-dom";

const divStyle = {
  display: 'flex',
  width: '100%',
  flexFlow: 'wrap'
}

export default function Dashboard() {
  const [items, userItems] = useState([]);

  useEffect(effect => {
    axiosWithAuth()
      .get(`api/item/:id`)
      .then(response => {
        console.log('This is the response', response);
        userItems(response.data);
      })
      .catch(error => {
        console.log('Error:', error);
      })
    }, [])

  return(
    <>
      <h1>Hello User!</h1>
      <nav>
        <Link to="/itemsList">
          <Button>Browse</Button>
        </Link>
      </nav>
      <NewItem/>
      <div style={divStyle}>
        {items.map(item => (
          <ItemCard 
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
  )
}