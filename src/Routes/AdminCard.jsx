import React, { useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { adddata, deleteProduct, getAdminProduct } from '../Redux/AppReducer/action';
import { Card, CardHeader, CardBody,
     CardFooter, Button, ButtonGroup,
      Divider, Heading, Stack, Image, Text, Grid } from '@chakra-ui/react'
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';


const AdminCard = () => {

    const product= useSelector((state) => state.AppReducer.product)

const dispatch=useDispatch();
   
    const navigate=useNavigate();

    useEffect(()=>{
        if(product.length===0)
        {
            dispatch(getAdminProduct());
  
        }
      
  
    },[dispatch])
  
    console.log(product)

    async function handleDelete(id) {
        await axios.delete(`https://newm.onrender.com/companies/${id}`);
        dispatch(getAdminProduct());
      }

  return (
    <div>
        


      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Company Logo</Th>
        <Th>Company Name</Th>
        <Th>Company Types</Th>
        <Th>Stock Exchange </Th>
        <Th>Total Shares </Th>
        <Th> Cost Per Share</Th>
        <Th> Price Action</Th>
        <Th> Edit</Th>
        <Th> Delete</Th>

      </Tr>
    </Thead>
    {product.length > 0 && product.map((user) => {

return(
    <Tbody>
      <Tr>
        <Td>
        <Image
        src={user.  company_logo}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        width={"100px"}
      />
        </Td>
        <Td>  {user.company_name}</Td>
        <Td>   {user.company_type}</Td>
        <Td>   {user.stock_exchange}</Td>
        <Td>   {user.total_shares}</Td>
        <Td>  {user.cost_per_share} </Td>
        <Td>  {user.price_action} </Td>
        <Td>
        <EditIcon/>
        </Td>
        <Td>
        <DeleteIcon onClick={() => handleDelete(user.id)}></DeleteIcon>
        </Td>
      </Tr>
      
    </Tbody>
      )
    })}
    
  </Table>
</TableContainer>
        
  


    </div>
  )
}

export default AdminCard