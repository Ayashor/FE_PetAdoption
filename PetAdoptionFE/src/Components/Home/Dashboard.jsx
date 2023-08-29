import { Text, Heading, Button, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from "../../Contexts/authContext.js";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePageIn = () => {
    const { signupData } = useContext(AuthContext);

  return (
    <Flex justify='center' align='center' direction='column'>
        <Heading fontSize='6xl' m={4}>Welcome {signupData.firstName} {signupData.lastName}</Heading>
        <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='space-between'>
            <Card align='center' mx='4' maxW='300px'>
                <CardHeader>
                    <Heading size='md'>Browse!</Heading>
                </CardHeader>
                <CardBody>
                    <Text mb={'0'} align='center'>Look at all of our animals that are waiting to be adopted.</Text>
                </CardBody>
                <CardFooter>
                    <Link to="/all-pets">
                        <Button colorScheme='blue'>View here</Button>
                    </Link>
                </CardFooter>
            </Card>
            <Card align='center' mx='4' maxW='300px'>
                <CardHeader>
                    <Heading size='md'>Your Pets!</Heading>
                </CardHeader>
                <CardBody>
                    <Text align='center' mb={'0'}>View all the pets you have saved, adopted, or are fostering.</Text>
                </CardBody>
                <CardFooter>
                    <Link to="/my-pets">
                        <Button colorScheme='blue'>View here</Button>
                    </Link>
                </CardFooter>
            </Card>
            <Card align='center' maxW='300px'>
                <CardHeader>
                    <Heading size='md'>Your Profile!</Heading>
                </CardHeader>
                <CardBody>
                    <Text mb={'0'} align='center'>Update or change your personal details, email, or password!</Text>
                </CardBody>
                <CardFooter>
                    <Link to="/profile">
                        <Button colorScheme='blue'>Click here</Button>
                    </Link>
                </CardFooter>
            </Card>
        </Flex>
    </Flex>
  )
}

export default HomePageIn