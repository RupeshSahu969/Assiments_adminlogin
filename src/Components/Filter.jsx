import { Box, Button, Container, Flex, Heading, Input, Select,Text, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getfilter,sortPrice } from "../Redux/AppReducer/action";

const Filter = () => {
  const [filter,setFilter]=useState(null);
  const [sortbyPrice,setFilterSTG]=useState(null);
  const [query,setQuery]=useState(null);
 
  const product=useSelector((state) => state.AppReducer.product)

  const dispatch=useDispatch();

  useEffect(() => {
    
    console.log("filters",filter,sortbyPrice);
    if(filter){
      dispatch(getfilter(`https://newm.onrender.com/companies?_page=1&_limit=4&company_type=${filter}`))

    }
    else if (sortbyPrice){
      dispatch(getfilter(`https://newm.onrender.com/companies?_page=1&_limit=4&cost_per_share=${sortbyPrice}`))

    }
    
  }, [filter,sortbyPrice]);


  function handleSortPrice(e) {
    const query = e.target.value;

    if (query === "low") {
      product.sort((a, b) => {
        return a.cost_per_share - b.cost_per_share;
      });
    } else {
      product.sort((a, b) => {
        return b.cost_per_share - a.cost_per_share;
      });
    }
    let sortedArray = [...product];
    dispatch(sortPrice(sortedArray));
  }




  return (
    <Box m="auto" boxShadow='lg' p='6' rounded='md' bg='white' w="90%">
      
      
      <SimpleGrid  minChildWidth='10px'>
          <Box>
            <Select placeholder="Sort by Price">
            <option>Select</option>
          <option value="low">Low to High</option>
          <option value="high"> High to Low</option>
            </Select>

          </Box>
        <Text>Filter</Text>
        <Box>
            <Select  onChange={(e)=>setFilter(e.target.value)}>
            <option value="Bank">Bank</option>
          <option value="IT">IT</option>
          <option value="Automobile">Automobile</option>
          <option value="Pharma">Pharma</option>
          <option value="Oil">Oil</option>
              
            </Select>

          </Box>
      
      
      </SimpleGrid>
     
     
    </Box>
  );
};

export default Filter;
