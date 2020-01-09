import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const MyButton = styled(Button)({
  background: 'primary',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  width: 140,
  padding: '0 5px',
});

const navStyle = {
  display: 'flex',
  background: '#33266E',
  flexFlow: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: '60px'
}

const linkStyle = {
  textDecoration: 'none',
  fontWeight: '700'
}

export default function Navigation() {

  return(
    <>
      <nav style={navStyle}>
        <h1 style={{color: "white"}}>Sauti.Africa</h1>
        <Link style={linkStyle} to="/protected">
          <MyButton variant="contained" color="primary">Sell An Item</MyButton>
        </Link>
        <Link style={linkStyle} to="/itemsList">
          <MyButton variant="contained" color="primary">Browse Items</MyButton>
        </Link>
        <Link style={linkStyle} to="/">
          <MyButton variant="contained" color="primary">Log Out</MyButton>
        </Link>
      </nav>
    </>
  )

}
