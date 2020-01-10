import React, {useState, useEffect} from 'react';
import UserItemCard from './UserItemCard';
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
  const [user, setUser] = useState();
  console.log(localStorage);
  const id = localStorage.getItem("userId");

  useEffect(effect => {
    axiosWithAuth()
      .get(`api/user/${id}`)
      .then(response => {
        console.log('This is the response', response);
        userItems(response.data.user.items);
        setUser(response.data.user.first_name);
      })
      .catch(error => {
        console.log('Error:', error);
      })
    }, [])

  return(
    <>
      <h1>Hello {user}!</h1>
      <h1>These Are Your Items</h1>
      <div style={divStyle}>
        {items.map(item => (
          <UserItemCard 
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