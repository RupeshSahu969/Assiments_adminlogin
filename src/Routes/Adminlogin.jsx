import { Box, Button, Container, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  

  const navigate=useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault()

    if(email=== "admin@stockbroker.com"  && password=== "admin123")
    {
        navigate("/dashboard")
    }
    else{
      alert("fiald")
    }

    console.log(email,password)

  }
 

  email : 
  password : 

  return (
    <div>
      <Box >
      <Box style={{display:"flex",flexDirection:"flex-end",marginBottom:"20px"}}>
  
      </Box>
      
    <Box m="auto" boxShadow='lg' p='6' rounded='md' bg='white' w="35%">
       <Heading>Login</Heading>
       <Container>
      <form onSubmit={handleLogin}>
      
        <Box>
          <FormLabel>Email</FormLabel>
          <Input
          type="email"
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>
        </Box>
        <Box>
          <FormLabel>Password</FormLabel>
          <Input 
         
          type="password"
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          />
        </Box>
        <Button type="submit" colorScheme="teal" style={{width:"100%",marginTop:"50px"}}>
          Login
        </Button>
      </form>
      </Container>
      </Box>
    </Box>

    </div>
  )
}

export default AdminLogin