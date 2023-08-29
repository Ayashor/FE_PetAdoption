import React from 'react';
import { Flex, Box, Text, Heading, Button } from '@chakra-ui/react';
import { Collapse, useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/authContext.js';
import { Link } from 'react-router-dom';

const HomePageOut = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Flex align="center" justify="space-between" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0}} bgImage="url('https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" bgSize="cover" bgPosition="center" w="100vw" h="100vh" >
        <Flex justify="center" direction="column" ml='5rem'>
            <Heading as="h1" fontSize="6xl" color={'white'} textShadow="1px 1px 0px #000">Fur</Heading>
            <Heading as="h1" fontSize="6xl" color={'white'} textShadow="1px 1px 0px #000">Ever</Heading>
            <Heading as="h1" fontSize="6xl" color={'white'} textShadow="1px 1px 0px #000">Friends</Heading>
        </Flex>
        <Flex justify="center" align="center" direction="column" w={400} mr='5rem'>
            <Text fontSize="2xl" mb={4} as='i' align={'center'} color='white'>Helping animals find a new home and helping you find a new best friend</Text>
            {isLoggedIn ? <Button colorScheme='whiteAlpha'>
              <Link to='/search-page' >Start Searching</Link>
            </Button>
            :
            <>
            <Button onClick={onToggle} variant='outline' colorScheme='whiteAlpha'>What We Do</Button>
            <Collapse in={isOpen} animateOpacity>
            <Box p="12px" color="black" rounded="md" shadow="md">
                <Text fontSize="sm">
                Fur Ever Friends is a website that helps you find a new pet to adopt. We have a database of animals that are looking for a new home. You can search for a specific animal or browse through our database. Our priority is to help animals find a new home and help you find a new best friend. To get started, create an account by clicking on the "Sign up" tab in the navigation bar. Or if you already have an account, click on the "Login" tab in the navigation bar.
                </Text>
            </Box>
            </Collapse>
            </>}
        </Flex>
    </Flex>
  );
};

export default HomePageOut;