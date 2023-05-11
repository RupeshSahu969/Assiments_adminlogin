import React, { useEffect, useState } from 'react'
import { Button, FormLabel, Grid, Input, InputGroup, InputRightElement, Select, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { adddata, getAdminProduct } from '../Redux/AppReducer/action';
import AdminCard from './AdminCard';


const AdminDashboard = () => {
const [company_logo,setcompany_logo]=useState("")
const [company_name,setcompany_name]=useState("")

const [company_type,setcompany_type]=useState("")
const [stock_exchange,setstock_exchange]=useState("")
const [total_shares,settotal_shares]=useState("")
const [cost_per_share,setcost_per_share]=useState("")
const [price_action,setprice_action]=useState("")

const product= useSelector((state) => state.AppReducer.product)

const dispatch=useDispatch();
   
    const navigate=useNavigate();

    const hendleAddData=(e)=>{
      e.preventDefault();
      const payload={
        company_logo:company_logo,
company_name:company_name,
company_type:company_type,
stock_exchange:stock_exchange,
total_shares:total_shares,
cost_per_share:cost_per_share,
price_action:price_action,
      }
      console.log(payload);
  
        dispatch(adddata(payload))
        .then((res)=>{
         console.log(res)
          alert("Register Successfully ");
          // navigate("/admincard");
          navigate("/dashboard")
          window.location.reload()
        })
    }

    useEffect(()=>{
      if(product.length===0)
      {
          dispatch(getAdminProduct());

      }
    

  },[dispatch])

  console.log(product)


  return (
    <div>
       <SimpleGrid justifyContent='center'>
        <Text fontWeight='800' fontSize='5xl' textAlign='center'>Admin Dashboard</Text>
    <Grid gridGap='1rem' mt='2rem'>
    <FormLabel>Company Logo</FormLabel>
        <Input 
        type='src'
          isInvalid
          errorBorderColor='black' 
          value={company_logo} 
          onChange={(e)=>setcompany_logo(e.target.value)}
      required
          />
          <FormLabel>Company Name</FormLabel>
        <Input 
        type='text'
          isInvalid
          errorBorderColor='black' 
          value={company_name} 
          onChange={(e)=>setcompany_name(e.target.value)}
      required
          />
        <FormLabel>Company Type</FormLabel>
        <Select 
        value={company_type} 
        onChange={(e)=>setcompany_type(e.target.value)}
        >
        <option value="Bank">Bank</option>
          <option value="IT">IT</option>
          <option value="Automobile">Automobile</option>
          <option value="Pharma">Pharma</option>
          <option value="Oil">Oil</option>
        </Select>
        <FormLabel>Stock Exchange</FormLabel>
        <Select 
        value={stock_exchange} 
        onChange={(e)=>setstock_exchange(e.target.value)}
        >
          <option value="NSE">NSE</option>
          <option value="BSE">BSE</option>
          
        </Select>
      <FormLabel>Total Shares</FormLabel>
        <Input
         isInvalid
         errorBorderColor='black' 
         type='number'
         value={total_shares} 
         onChange={(e)=>settotal_shares(e.target.value)}
          required
          />
          <FormLabel>Cost Per Share</FormLabel>
        <Input
         isInvalid
         errorBorderColor='black' 
         type='number'
         value={cost_per_share} 
         onChange={(e)=>setcost_per_share(e.target.value)}
          required
          />
        <FormLabel>Price Action</FormLabel>
      <Input
         isInvalid
         errorBorderColor='black'
        pr='4.5rem'
        type='number'
        value={price_action} 
        onChange={(e)=>setprice_action(e.target.value)}
       
       
          required
      />
        <Button onClick={hendleAddData}  color='balck' bgColor='blue'  >Register</Button>
    </Grid>
    </SimpleGrid>
    <AdminCard/>
    </div>
  )
}

export default AdminDashboard
