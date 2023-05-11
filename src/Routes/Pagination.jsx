import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({current,onChange,total}) => {
    const pages= new Array(total).fill(0).map((a,i)=>{
        return <Button colorScheme="green"  variant="outline"  _hover={{
          bg: "green",
        }} style={{margin:"5px"}} key={i} onClick={()=>onChange(i+1)} disabled={current===i+1}>{i+1}</Button>
        
    })
  return (
    <Box boxShadow="lg" rounded="md" w="78%" m="auto" marginTop={"20px"} >
        {/* {prev} */}
        <ChevronLeftIcon/> 
      {pages}
      {/* {next} */}
      <ChevronRightIcon /> 
    </Box>
  )
}

export default Pagination