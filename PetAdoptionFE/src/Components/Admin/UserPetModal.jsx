import React from 'react'
import { useContext } from 'react'
import { PetContext } from '../../Contexts/petContext'
import { Button, Modal, ModalBody, ModalContent, ModalOverlay, ModalHeader, ModalFooter, Text, Flex } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'


const UserPetModal = ({userId}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { userAdopted, userPets } = useContext(PetContext)

    const openModal = async (e) => {
        e.preventDefault()
        await userAdopted(userId)
        onOpen()
    }



    return (
        <>
            <Button onClick={openModal}>Adopted Pets</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Adopted Pets</ModalHeader>
                    <ModalBody>
                        {userPets.length === 0 ? (
                            <Text>Currently not adopting any pets</Text>
                            ) : (
                            userPets.map((pet) => (
                            <Flex key={pet._id}>
                                <Text>{pet.name} : {pet.type}</Text>
                            </Flex> ))
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UserPetModal