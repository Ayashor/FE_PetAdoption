import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/authContext.js";
import { PetContext } from "../../../Contexts/petContext.js";
import { Card, CardFooter, Image, Heading, Divider, Text, Button, Tag, Flex, border, Tooltip } from "@chakra-ui/react";
import PetCardModal from "./PetCardModal";
import { VscHeartFilled } from 'react-icons/vsc'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { BsBookmarkHeart } from 'react-icons/bs'
import { ImSad2 } from 'react-icons/im'



const PetCard = ({ pet }) => {
  const { isLoggedIn, signupData } = useContext(AuthContext);
  const { onSavePet, onFosterPet, onAdoptPet, returnAdoptedPet, undoSavePet, returnFosteredPet } = useContext(PetContext);

  const isAdoptedByCurrentUser = pet.adoptedByUser.includes(signupData._id);
  const isFosteredByCurrentUser = pet.fosteredByUser.includes(signupData._id);
  const isSavedByCurrentUser = pet.savedByUsers.includes(signupData._id);

  

 
  return (
    <Card maxW='sm' mb={6} mx={4} variant={'elevated'} w={{
      sm: '200px',
      md: '350px',
      lg: '400px',
      base: '200px',
    }}>
      <Image maxH={200} 
        src = {pet.picture} 
        alt= {`Image of a cute ${pet.type}`}
        objectFit='cover'
        borderTopRadius='md'
      />
      <Flex justify='center' align='center' direction='column' mx={3}>
        <Heading size="lg">{pet.name}</Heading>
        <Text>
          {pet.adoptionStatus === "Available" && (
            <Tag mx={2} colorScheme="teal">Available</Tag>
          )}
          {pet.adoptionStatus === "Fostered" && (
            <Tag mx={2} colorScheme="orange">Fostered</Tag>
          )}
          {pet.adoptionStatus === "Adopted" && (
            <Tag mx={2} colorScheme="red">Adopted</Tag>
          )}
        </Text>
        {isSavedByCurrentUser ? (
              <Tooltip label="Click here to unsave this pet" aria-label="A tooltip">
                <Button mx={1} size={'md'} id={pet._id} onClick={() => undoSavePet(pet._id)}>
                  Unsave
                  <ImSad2 style={{marginLeft: '4px'}} color="black"/>
                </Button>
              </Tooltip>
          ) : (
        <Tooltip  label={isLoggedIn ? "Save this pet to view later" : "Login to save a pet"} aria-label="A tooltip">
        <Button m={1.5} size={'sm'} id={pet._id} onClick={() => onSavePet(pet._id)} isDisabled={pet.adoptionStatus === 'Adopted' || !isLoggedIn} variant='outline'>
          Save
          <BsBookmarkHeart style={{marginLeft: '4px'}} color="red"/>
        </Button>
        </Tooltip>)}
        <Flex direction='column' justify='center' align='center'>
          <Text align='center'> 
            {pet.bio}
          </Text>
          
          <Divider my={2} />
          <PetCardModal pet={pet}/>
        </Flex>
        <CardFooter padding={3}>
          <Flex direction='column' align='center' justify='center'>
            <Flex>
            {isAdoptedByCurrentUser ? (
              <Tooltip label="Click here to return the pet" aria-label="A tooltip">
                <Button mx={1} size={'md'} id={pet._id} onClick={() => returnAdoptedPet(pet._id)}>
                  Return
                  <ImSad2 style={{marginLeft: '4px'}} color="black"/>
                </Button>
              </Tooltip>
            ) : (
              <Tooltip  label={isLoggedIn ? "Click here to adopt" : "Login to adopt a pet"} aria-label="A tooltip">
                <Button mx={1} size={'md'} id={pet._id} onClick={() => onAdoptPet(pet._id)} isDisabled={pet.adoptionStatus === 'Adopted' || !isLoggedIn}>
                  Adopt
                  <VscHeartFilled style={{marginLeft: '4px'}} color="red"/>
                </Button>
              </Tooltip>)}
              {isFosteredByCurrentUser ? (
              <Tooltip label="Click here to unsave this pet" aria-label="A tooltip">
                <Button mx={1} size={'md'} id={pet._id} onClick={() => returnFosteredPet(pet._id)}>
                  Return 
                  <ImSad2 style={{marginLeft: '4px'}} color="black"/>
                </Button>
              </Tooltip>
          ) : (
              <Tooltip  label={isLoggedIn ? "Click here to foster" : "Login to foster a pet"} aria-label="A tooltip">
                <Button mx={1} size={'md'} id={pet._id} onClick={() => onFosterPet(pet._id)} isDisabled={pet.adoptionStatus === 'Adopted' || pet.adoptionStatus === 'Fostered' || !isLoggedIn}>
                  Foster
                  <HiOutlineEmojiHappy style={{marginLeft: '4px'}} color="red"/>
                </Button>
              </Tooltip>)}
            </Flex>
          </Flex>
        </CardFooter>
      </Flex>
    </Card>
  );
};

export default PetCard;
