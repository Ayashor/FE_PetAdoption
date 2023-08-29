import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import TableItems from './TableItems'


const PetsTable = () => {
 

  return (
    <Flex direction='column' justify='center' align='center'>
      <Heading fontSize='6xl' m={4}>List of Pets</Heading>
      <Flex direction='row' justify='center' align='center'>
        <TableItems/>
      </Flex>  
    </Flex>
  )
}

export default PetsTable