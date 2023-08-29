import { useState, useContext, useEffect } from 'react'
import { PetContext } from '../../Contexts/petContext'
import { Flex, Text, Radio, Stack, RadioGroup, Heading } from '@chakra-ui/react'
import PetCard from '../Pets/PetCards/PetCard.jsx'


const MyPets = () => {
  const { savedPets, fetchUserSavedPets, fetchUserFosteredPets, fosteredPets, adoptedPets, fetchUserAdoptedPets } = useContext(PetContext);
  const [value, setValue] = useState('Saved') 


  useEffect(() => {
      fetchUserSavedPets()
      fetchUserFosteredPets()
      fetchUserAdoptedPets()
  }, [value]);


  let cards;
  if (value === 'Saved') {
    cards = savedPets.length > 0 ? savedPets.map(pet => <PetCard key={pet.id} pet={pet} />) : <Text fontSize='4xl' m={5}>You haven't saved any pets yet!</Text>;
  } else if (value === 'Fostered') {
    cards = fosteredPets.length > 0 ? fosteredPets.map(pet => <PetCard key={pet.id} pet={pet} />) : <Text fontSize='4xl' m={5}>You aren't fostering any pets yet!</Text>;
  } else if (value === 'Adopted') {
    cards = adoptedPets.length > 0 ? adoptedPets.map(pet => <PetCard key={pet.id} pet={pet} />) : <Text fontSize='4xl' m={5}>You haven't adopted any pets yet!</Text>;
  } else {
    cards = null;
  }

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
        <Flex direction={'column'} justify={'center'} align={'center'}>
            <Heading fontSize='6xl' mb={3}>All of your pets!</Heading>
            <Text fontSize='1md' mb={'.5'}>Here you can see all the pets you have saved for later, adopted, or are currently fostering.</Text>
            <Text fontSize='1md' mb={3}>Try toggling between each of them.</Text>
            <RadioGroup onChange={setValue} value={value} colorScheme='teal' my={4}>
              <Stack direction='row'>
                <Radio value='Saved' bg="gray.200">Saved Pets</Radio>
                <Radio value='Adopted' bg="gray.200">Adopted Pets</Radio>
                <Radio value='Fostered' bg="gray.200">Fostered Pets</Radio>
              </Stack>
            </RadioGroup>
        </Flex>
        <Flex wrap={'wrap'} justify='center'>
          {cards}
        </Flex>
    </Flex>
  )
}

export default MyPets