import React from 'react'
import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, FormErrorMessage, Select } from '@chakra-ui/react'
import { Radio, RadioGroup, HStack } from "@chakra-ui/react"
import { useState, useContext } from 'react'
import { PetContext } from '../../Contexts/petContext'
import { EditIcon } from '@chakra-ui/icons'
import { useForm, Controller } from 'react-hook-form'


const EditPetModal = ({pet}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [pictureOption, setPictureOption] = useState('link'); 
    const { handleSubmit, control, register, formState: { errors }} = useForm()
    const { onUpdatePet } = useContext(PetContext)
    const petId = pet._id

    const onSubmit = (data) => {
        onUpdatePet(petId, data)
        onClose()
    }

    return (
        <>
            <EditIcon cursor='pointer' onClick={onOpen}/>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Pet</ModalHeader>
                    <Divider/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody>
                        <FormControl  mt={0}>
                            <FormLabel>Name</FormLabel>
                            <Input defaultValue={pet.name}
                            type="text"
                            {...register("name")}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Type</FormLabel>
                            <Input defaultValue={pet.type}
                            type="text"
                            {...register("type")}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Status</FormLabel>
                            <Input defaultValue={pet.adoptionStatus}
                            type="text"
                            {...register("status")}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Bio</FormLabel>
                            <Input defaultValue={pet.bio}
                            type="text"
                            {...register("bio")}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Picture</FormLabel>
                            <RadioGroup size={'sm'} defaultValue={pictureOption} onChange={setPictureOption}>
                                <HStack spacing={4}>
                                    <Radio value="upload">Upload</Radio>
                                    <Radio value="link">Link</Radio>
                                </HStack>
                            </RadioGroup>
                            {pictureOption === 'link' ? (
                                <Input type="text" {...register("picture")} defaultValue={pet.picture} />
                                ) : (
                                <Input type="file" {...register("picture")} />
                            )}
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Height</FormLabel>
                            <Input defaultValue={pet.height}
                            type="number"
                            {...register("height")}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Weight</FormLabel>
                            <Input defaultValue={pet.weight}
                            type="number"
                            {...register("weight")}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Color</FormLabel>
                            <Input defaultValue={pet.color}
                            type="text"
                            {...register("color")}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Hypoallergenic</FormLabel>
                            <Controller
                                control={control}
                                name="hypoallergenic"
                                defaultValue={pet.hypoallergenic ? 'true' : 'false'}
                                render={({ field }) => (
                                    <Select {...field} >
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </Select>
                                )}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Dietary Restrictions</FormLabel>
                            <Input defaultValue={pet.dietaryRestrictions}
                            type="text"
                            {...register("dietaryRestrictions")}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Breed</FormLabel>
                            <Input defaultValue={pet.breed}
                            type="text"
                            {...register("breed")}
                            />
                        </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} type='submit'>Save</Button>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditPetModal