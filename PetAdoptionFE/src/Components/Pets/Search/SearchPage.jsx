import React, { useContext } from 'react'
import { useRef, useState } from 'react'
import  axios  from 'axios'
import PetCard from '../PetCards/PetCard.jsx'
import { Text, Input, Button, Stack, Switch, FormControl, Select, FormHelperText, Flex, RadioGroup, Radio, Collapse, useDisclosure, Heading } from '@chakra-ui/react'
import { PetContext } from '../../../Contexts/petContext.js'

//TODO - Add a text that says "No pets found" if the search returns no pets

const Search = () => {
    const { isOpen, onToggle } = useDisclosure()
    const [search, setSearch] = useState('')
    const [pets, setPets] = useState([])
    const inputRef = useRef();
    const [animalType, setAnimalType] = useState('');
    const [adoptionStatus, setAdoptionStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [name, setName] = useState('');
    const { baseUrlPets } = useContext(PetContext)

    //Simple search
    const getAllPets = async (type) =>{
        try{
          const res = await axios.get(`${baseUrlPets}/${type}`) /* http://localhost:8080/api/all-pets/${type} */
          console.log(res)
          return res.data
        }catch(err){
          console.log(err)
        }
    }
    const handleSearch = async () => {
        const type = inputRef.current.value.toLowerCase();
        const pets = await getAllPets(type);
        setPets(pets);
    }
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }
   
    //Advanced search
    const getAdvancedPets = async (type, adoptionStatus, height, weight, name) =>{
        try{
            const res = await axios.get(`${baseUrlPets}/search?type=${type}&status=${adoptionStatus}&height=${height}&weight=${weight}&name=${name}`)
            // http://localhost:8080/api/all-pets/search?type=${type}&status=${adoptionStatus}&height=${height}&weight=${weight}&name=${name}
            console.log(res)
            return res.data
        }catch(err){
            console.log(err)
        }
    }
    const animalTypeChange= (value) => {
        setAnimalType(value)
    }
    const adoptionStatusChange= (e) => {
        setAdoptionStatus(e.target.value)
    }
    const heightChange= (e) => {
        setHeight(e.target.value)
    }
    const weightChange= (e) => {
        setWeight(e.target.value)
    }
    const nameChange= (e) => {
        setName(e.target.value)
    }
    const handleAdvancedSearch = async () => {
        const type = animalType;
        const status = adoptionStatus;
        const petHeight = height;
        const petWeight = weight;
        const petName = name;
        const pets = await getAdvancedPets(type, status, petHeight, petWeight, petName);
        setPets(pets);
    }

    const handleResetFields = () => {
        setAnimalType('');
        setAdoptionStatus('');
        setHeight('');
        setWeight('');
        setName('');
    }

    const cards = pets && pets.map(pet =>{
        return <PetCard key={pet.id} pet={pet}/>
    })
    

    return (
        <Flex direction="column" align="center" justify="center">
            <Flex direction="column" align="center" justify="center" mb={1}>
                <Heading fontSize="4xl" my={4}>Search our database of animals</Heading>
                <FormControl>
                    <Stack direction="row">
                    <Input ref={inputRef} width="600px" variant="filled" onChange={handleSearchChange} value={search} size="lg" type="text" placeholder="Search for an animal (i.e. dog, cat, etc.)" _focus={{ bg: "gray.200" }} isDisabled={isOpen} />
                    <Button isDisabled={isOpen} size="lg" colorScheme="teal" variant="solid" onClick={handleSearch}>Search</Button>
                    </Stack>
                </FormControl>
            </Flex>
            <Flex direction="column" align="center" justify="center">
                <Text fontSize="2xl" mb={3}>
                    Advanced Search?<Switch size="md" colorScheme="teal" mx={2} onChange={onToggle}/>
                </Text>
                <Collapse in={isOpen} animateOpacity> 
                    <FormControl>
                        <Stack>
                            <Flex direction="row" align="center" justify="center">
                                <RadioGroup onChange={animalTypeChange} value={animalType} colorScheme='teal'>
                                    <Stack direction='row'>
                                        <Radio value='cat' bg="gray.200">Cat</Radio>
                                        <Radio value='dog' bg="gray.200">Dog</Radio>
                                        <Radio value='other' bg="gray.200">Other</Radio>
                                    </Stack>
                                </RadioGroup>
                            </Flex>
                            <Flex>
                                <Select value={adoptionStatus} onChange={adoptionStatusChange} placeholder="Adoption Status" name='adoptionStatus' variant="filled" _focus={{ bg: "gray.200" }}>
                                    <option value='Available'>Available</option>
                                    <option value='Adopted'>Adopted</option>
                                    <option value='Fostered'>Fostered</option>
                                </Select> 
                            </Flex>
                            <Stack direction="row">
                                <Select name='height' value={height} onChange={heightChange} placeholder="Select Height (inches)" variant="filled" _focus={{ bg: "gray.200" }}>
                                    <option>0-12</option>
                                    <option>13-24</option>
                                    <option>25-36</option>
                                    <option>37-48</option>
                                    <option>49 and above</option>
                                </Select>
                                <Select name='weight' value={weight} onChange={weightChange} placeholder="Select Weight (pounds)" variant="filled" _focus={{ bg: "gray.200" }}>
                                <option>0-20</option>
                                <option>21-40</option>
                                <option>41-60</option>
                                <option>61-80</option>
                                <option>80 and above</option>
                                </Select>
                            </Stack>
                            <Input value={name} name='name' onChange={nameChange} placeholder="Name of pet" variant="filled" _focus={{ bg: "gray.200" }} />
                            <FormHelperText>If you know the name of the pet, try searching for it!</FormHelperText>
                        </Stack>
                        <Flex justify={'center'}>
                            <Button size="md" mt={3} mr={3} colorScheme="teal" variant="solid" onClick={handleAdvancedSearch}>Search</Button>
                            <Button size="md" mt={3} ml={3} colorScheme="teal" variant="outline" onClick={handleResetFields}>Clear</Button>
                        </Flex>
                    </FormControl>
                </Collapse>
            </Flex>
            <Flex direction="row" align="center" justify="center" my={5} wrap='wrap'>
                {cards}
            </Flex>
      </Flex>
    )
}

export default Search