import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import UserTableItems from './UserTableItems'



const UsersList = () => {
  return (
    <Flex direction='column' justify='center' align='center'>
      <Heading fontSize='6xl' m={4}>List of Users</Heading>
      <Flex direction='row' justify='center' align='center'>
        <UserTableItems/>
      </Flex>  
    </Flex>
  )
}

export default UsersList