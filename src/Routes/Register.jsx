import React, { useState } from 'react'
import { Button, FormLabel, Grid, Input, InputGroup, InputRightElement, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../Redux/AuthReducer/actionCreator';


const Register = () => {

    const token= useSelector((state) => state.AuthReducer.token);
  
  
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const dispatch=useDispatch();
   
  
    const navigate=useNavigate();

    const hendleAdd=(e)=>{
        e.preventDefault();
        const payload={
          username:username,
          email:email,
          password:password
        }
        console.log(payload);
    
          dispatch(userRegister(payload))
          .then((res)=>{
           
            alert("Register Successfully ");
           
           
            navigate("/login");
          })
      
        
    
      }


  return (
    <div>
          <SimpleGrid justifyContent='center'>
        <Text fontWeight='800' fontSize='5xl' textAlign='center'>Register</Text>
    <Grid gridGap='1rem' mt='5rem'>
    <FormLabel>UserName</FormLabel>
        <Input 
          isInvalid
          errorBorderColor='black' placeholder='Enter Username'
          value={username} 
          onChange={(e)=>setUsername(e.target.value)}
      required
          />

<FormLabel>Email</FormLabel>
        <Input
         isInvalid
         errorBorderColor='black' placeholder='Enter Email'
         type='email'
         value={email} 
         onChange={(e)=>setEmail(e.target.value)}
          required
          />
        <FormLabel>Password</FormLabel>
      <Input
         isInvalid
         errorBorderColor='black'
        pr='4.5rem'
        type='password'
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter password'
       
          required
      />
        <Button onClick={hendleAdd}  color='white' bgColor='blue'>SignUp</Button>
    </Grid>
    </SimpleGrid>
    </div>
  )
}

export default Register