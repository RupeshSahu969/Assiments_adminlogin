import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { adddata, deleteProduct, getAdminProduct, sortPrice } from '../Redux/AppReducer/action';
import { Card, CardHeader, CardBody,
     CardFooter, Button, ButtonGroup,
      Divider, Heading, Stack, Image, Text, Grid, Select, Box, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios';
import Filter from '../Components/Filter';
import Pagination from './Pagination';


const Stocks = () => {
  const product= useSelector((state) => state.AppReducer.product)
  const [page,setPage]=useState(1)
    
  const dispatch=useDispatch();
     
      const navigate=useNavigate();
  
      useEffect(()=>{
          if(product.length===0)
          {
              dispatch(getAdminProduct());
    
          }
        
    
      },[dispatch])
    
      console.log(product)
  
     
 

  
    return (
      <div>
       <Filter/>

          <Grid templateColumns='repeat(4, 1fr)' gap="20px">
  
  {product.length > 0 && product.map((user) => {
  
      return(
  
          <Card maxW='sm'>
    <CardBody key={user.id
  }>
      <Image
        src={user.  company_logo}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
       
        <Text>
         {user.company_name}
        </Text>
        <Text>
         {user.company_type}
        </Text>
        <Text>
          {user.stock_exchange}
        </Text>
        <Text>
          {user.total_shares}
        </Text>
        <Text>
          {user.cost_per_share}
        </Text>
        <Text>
          {user.price_action}
        </Text>
      </Stack>
      <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      </ButtonGroup>
    </CardBody>
    <Divider />
   
              </Card>
      )
  })}
  
  </Grid>
  <Pagination total={4} current={page} onChange={(value)=>setPage(value)}/>
      </div>
    )
  }


export default Stocks