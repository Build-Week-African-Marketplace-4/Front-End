import React from 'react';

export default function ItemCard(props) {
  return (
    <>
      <div className="grid-view">
        <h1>{props.name}</h1>
        <img src={image} alt={`${name}`}/>
        <p></p>
      </div>  
    </>
  );
}