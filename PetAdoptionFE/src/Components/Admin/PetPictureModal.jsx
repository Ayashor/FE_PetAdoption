import React from 'react'
import { Image, Modal, ModalBody, ModalContent, Button, ModalOverlay } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'



const PetPictureModal = ({picture}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen}>View Picture</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Image src={picture} alt="Pet picture" />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PetPictureModal