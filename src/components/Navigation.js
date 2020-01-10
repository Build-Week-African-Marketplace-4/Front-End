import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const MyButton = styled(Button)({
  background: 'primary',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 35,
  width: 130,
  padding: '0 5px',
  fontWeight: '700',
});

const navStyle = {
  display: 'flex',
  background: '#33266E',
  flexFlow: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: '55px'
}

const linkStyle = {
  textDecoration: 'none',
}

export default function Navigation() {

  return (
    <>
      <nav style={navStyle}>
        <Link style={linkStyle} to="/protected">
          <h1 style={{ color: "white" }}>Sauti.Africa</h1>
        </Link>
        <Link style={linkStyle} to="/newItem">
          <MyButton variant="contained" color="primary">
            Sell An Item
          </MyButton>
        </Link>
        <Link style={linkStyle} to="/itemsList">
          <MyButton variant="contained" color="primary">
            Browse Items
          </MyButton>
        </Link>
        <Link style={linkStyle} to="/">
          <MyButton variant="contained" color="primary">
            Log Out
          </MyButton>
        </Link>
      </nav>
    </>
  );

}
