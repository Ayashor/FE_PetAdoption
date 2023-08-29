import React from 'react'
import {  FormControl, FormLabel, Input, Button, FormErrorMessage } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../../../Contexts/authContext'


const AccountSettings = () => {
    const {handleSubmit, register, getValues, formState: { errors, isSubmitting }, reset} = useForm();
    const { signupData, onSubmitUpdatePassword } = useContext(AuthContext)

   




    return (
        <form onSubmit={handleSubmit(onSubmitUpdatePassword)}>
            <FormControl isInvalid={errors.password}>
                <FormLabel mb={0} mt={3}>Change Password</FormLabel>
                <Input type='password' 
                {...register("password", {
                minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters",
                },
                })}/>
                <FormErrorMessage>
                {errors.password && errors.password.message}
                </FormErrorMessage> 
            </FormControl>
            <FormControl isInvalid={errors.confirmPassword}>
                <FormLabel mb={0} mt={3}>Confirm New Password</FormLabel>
                <Input type="password"   
                {...register("confirmPassword", {
                    validate: (match) => {
                    const password = getValues("password");
                    return match === password || "Passwords should match.";
                    },
                })}/>
                <FormErrorMessage>
                {errors.confirmPassword && errors.confirmPassword.message}
                </FormErrorMessage>
            </FormControl>
            <Button type='submit' isLoading={isSubmitting} m={3}>
                Submit
            </Button>
        </form>
    )
}

export default AccountSettings