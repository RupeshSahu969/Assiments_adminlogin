import React from 'react'
import { Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import styled from 'styled-components';

const Navbar = () => {

    
  return (
    <div>
       <Box id="navbar-container">
      <Heading size={"md"}>Stock Broker</Heading>
      <Box>
        <NavbarWrapper>
        <Link to="/admin">Admin</Link>
        <Link to="/register">User</Link>
       
        </NavbarWrapper>
      </Box>
    </Box>
    </div>
  )
}


const NavbarWrapper=styled.div`width:100%;
border:1px solid blue;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
grid-gap:10px;
justify-content:center;

`
export default Navbar