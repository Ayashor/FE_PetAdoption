import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/authContext'
import { Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useToast} from '@chakra-ui/react'
import {FormControl, FormLabel, Input, FormErrorMessage,} from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import axios from 'axios';

const OverlayOne = () => (
  <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)'/>
)

const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const { handleSignup, signupData, handleIsLoggedIn, onSubmitLogin } = useContext(AuthContext);
  const toast = useToast()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  const {handleSubmit, register, formState: { errors }} = useForm();



  return (
    <div>
      <Text color={'white'} cursor="pointer" 
        onClick={() => {
          setOverlay(<OverlayOne />) 
          onOpen()}} >
            Login
      </Text>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
        <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit(onSubmitLogin)}>
              <ModalBody>
              <FormControl isInvalid={errors.email} mt={4}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  {...register("email", { required: "Must be a valid email" })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password} mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 characters",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' mr={3} type='submit'>Login</Button>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </form>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default LoginModal