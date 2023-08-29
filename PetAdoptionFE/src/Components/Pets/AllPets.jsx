import React from 'react'
import { Text, Button, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CardParent from './PetCards/CardParent'


const AllPets = () => {
  return (
    <Flex justify={'center'} align={'center'} direction={'column'}>
      <Flex align={'center'} direction={'column'} style={{marginTop:'1em'}}>
          <Heading fontSize='6xl' mb={'0'}>All of our pets!</Heading>
      </Flex>
      <Flex my={6} wrap='wrap' justify='center'>
          <CardParent/>
      </Flex>
      <Flex direction={'column'} justify={'center'} align={'center'} my={3}>
        <Text fontSize='2xl' mb={'.5'}>Can't find what you're looking for?</Text>
        <Link to='/search-page'>
            <Button colorScheme='teal' size='sm'>Go to the search page</Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default AllPets