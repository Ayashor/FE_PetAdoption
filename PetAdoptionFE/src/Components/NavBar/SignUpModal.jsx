import React from "react";
import { useContext } from "react";
import { Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from "@chakra-ui/react";
import {FormControl, FormLabel, Input, FormErrorMessage, useToast} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/authContext.js";


const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

const SignUpModal = () => {
  const { signupData, onSubmitSignup } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const {handleSubmit, register, getValues, formState: { errors, isSubmitting }, reset} = useForm();
  const navigate = useNavigate();

  

  
  

  return (
    <div>
      <Text color={'white'} cursor="pointer"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}>
        Sign Up
      </Text>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmitSignup)}>
            <ModalBody>
              <FormControl isInvalid={errors.firstName}>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.lastName}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </FormErrorMessage>
              </FormControl>
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
              <FormControl isInvalid={errors.phone} mt={4}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  {...register("phone", { required: "Must be a valid number" })}
                />
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
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
              <FormControl isInvalid={errors.confirmPassword} mt={4}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  {...register("confirmPassword", {
                    validate: (match) => {
                      const password = getValues("password");
                      return match === password || "Passwords should match.";
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit" isLoading={isSubmitting}>Create Account</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SignUpModal;