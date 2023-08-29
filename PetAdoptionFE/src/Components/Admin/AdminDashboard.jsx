import { Text, Heading, Button, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from "../../Contexts/authContext.js";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <Flex justify='center' align='center' direction='column'>
        <Heading fontSize='6xl' m={4}>Admin Dashboard</Heading>
        <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='space-between'>
            <Card align='center' m='4' maxW='300px'>
                <CardHeader>
                    <Heading size='md'>Users</Heading>
                </CardHeader>
                <CardBody>
                    <Text mb={'0'} align='center'>Look at all of the registered users of our site. View all of their details and pets.</Text>
                </CardBody>
                <CardFooter>
                    <Link to="/users_list">
                        <Button colorScheme='blue'>View here</Button>
                    </Link>
                </CardFooter>
            </Card>
            <Card align='center' m='4' maxW='300px'>
                <CardHeader>
                    <Heading size='md'>Pets</Heading>
                </CardHeader>
                <CardBody>
                    <Text align='center' mb={'0'}>View all of the pets currently in our database. You can also edit a pets' details from here.</Text>
                </CardBody>
                <CardFooter>
                    <Link to="/pets_list">
                        <Button colorScheme='blue'>View here</Button>
                    </Link>
                </CardFooter>
            </Card>
            <Card align='center' m='4' maxW='300px'>
                <CardHeader>
                    <Heading size='md'>Add Pet</Heading>
                </CardHeader>
                <CardBody>
                    <Text mb={'0'} align='center'>Form for adding new pets to our database and website! With picture</Text>
                </CardBody>
                <CardFooter>
                    <Link to="/new_pet">
                        <Button colorScheme='blue'>Click here</Button>
                    </Link>
                </CardFooter>
            </Card>
        </Flex>
    </Flex>
  )
}

export default AdminDashboard