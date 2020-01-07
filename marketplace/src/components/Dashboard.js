import React from 'react';
import ItemCard from './ItemCards'

const fakeItems = {        
  "items": [
  {
      "id": 1,
      "name": "corn",
      "description": "red",
      "price": 4.21,
      "city": "Zaria",
      "country": "Nigeria",
      "user_id": 1,
      "favorited": 1,
      "categories": [
          {
              "id": 1,
              "type": "vegetable produce",
              "item_id": 1
          }
      ]
  },
  {
      "id": 2,
      "name": "cocoa bean",
      "description": "coffee",
      "price": 3.1,
      "city": "Zaria",
      "country": "Nigeria",
      "user_id": 1,
      "favorited": 1,
      "categories": [
          {
              "id": 2,
              "type": "fruit produce",
              "item_id": 2
          }
      ]
  },
  {
      "id": 3,
      "name": "banana",
      "description": "green",
      "price": 4.5,
      "city": "Zaria",
      "country": "Nigeria",
      "user_id": 1,
      "favorited": 1,
      "categories": [
          {
              "id": 3,
              "type": "fruit produce",
              "item_id": 3
          }
      ]
  },
  {
      "id": 4,
      "name": "cucumber",
      "description": "regular",
      "price": 3.5,
      "city": "Zaria",
      "country": "Nigeria",
      "user_id": 1,
      "favorited": 1,
      "categories": [
          {
              "id": 4,
              "type": "vegetable produce",
              "item_id": 4
          }
      ]
  }
],
}

const divStyle = {
  display: 'flex',
  width: '100%',
  flexFlow: 'wrap'
}

export default function Dashboard() {
  return(
    <>
      <div style={divStyle}>
        {fakeItems.items.map(item => (
          <ItemCard 
          key={item.id} 
          name={item.name} 
          description={item.description} 
          price={item.price} 
          city={item.city} 
          country={item.country} 
          categories={item.categories.type}
          />
        ))}
          
      </div>
    </>
  )
}