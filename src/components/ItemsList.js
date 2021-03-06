import React, {useState, useEffect} from 'react';
import ItemCard from './ItemCards';
import axiosWithAuth from '../utils/AxiosWithAuth';

const divStyle = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexFlow: 'wrap'
}

export default function Dashboard() {
  const [items, userItems] = useState([]);

  useEffect(effect => {
    axiosWithAuth()
      .get('api/item/')
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
      <h1>All Items For Sale</h1>
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