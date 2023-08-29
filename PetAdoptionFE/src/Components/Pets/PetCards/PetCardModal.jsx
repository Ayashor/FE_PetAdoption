import React from 'react'
import { Modal, ModalOverlay, Button, ModalContent, Flex, Image, Text } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

const PetCardModal = ({pet}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button colorScheme='whatsapp' mx={1} size={'sm'} onClick={onOpen}>More Info</Button>
            
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(10deg)' />
                <ModalContent>
                    <Flex direction='column' justify='center' align='center'>
                        <Flex direction='column' justify='center' align='center' mt={4}>
                            <Text fontSize='2xl' fontWeight='bold'>{pet.name}</Text>
                            <Image
                                src = {pet.picture} 
                                w={300}
                                alt= 'Image of a cute'
                                borderRadius='md'
                            />
                        </Flex>
                        <Flex>
                            <Text fontSize='lg' m={2}>
                                <Text fontWeight='bold' display='inline-block' mr={.5}>Color:</Text>
                                {pet.color}
                            </Text>
                            <Text fontSize='lg' m={2}>
                                <Text fontWeight='bold' display='inline-block' mr={.5}>Breed:</Text>
                                {pet.breed}
                            </Text>
                        </Flex>
                        <Flex>
                            <Text fontSize='lg' m={2}>
                                <Text fontWeight='bold' display='inline-block' mr={.5}>Height:</Text>
                                {pet.height} inches
                            </Text>
                            <Text fontSize='lg' m={2}>
                                <Text fontWeight='bold' display='inline-block' mr={.5}>Weight:</Text>
                                {pet.weight} pounds
                            </Text>
                        </Flex>
                        <Flex>
                            <Text fontSize='lg' m={2}>
                                <Text fontWeight='bold' display='inline-block' mr={1}>Dietary Restrictions:</Text>
                                {pet.dietaryRestrictions} 
                            </Text>
                        </Flex>
                        <Flex mb={4}>
                            <Text fontSize='lg' m={2}>
                                <Text fontWeight='bold' display='inline-block' mr={1}>Hypoallergenic:</Text>
                                {pet.hypoallergenic ? 'Yes' : 'No'}
                            </Text>
                        </Flex>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PetCardModal