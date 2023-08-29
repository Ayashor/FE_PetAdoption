import React from 'react'
import { FormControl, FormLabel, Input, Button, FormErrorMessage } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../../../Contexts/authContext'

const DetailSettings = () => {
    const {handleSubmit, register, getValues, formState: { errors, isSubmitting }, reset} = useForm();
    const { signupData, onSubmitEditUserDetails } = useContext(AuthContext)

    const onSubmit = (data) => {
        onSubmitEditUserDetails(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <FormLabel mb={0}>First Name</FormLabel>
                <Input {...register('firstName')} type='text' defaultValue={signupData.firstName} />
            </FormControl>
            <FormControl>
                <FormLabel mb={0} mt={3}>Last Name</FormLabel>
                <Input {...register('lastName')} type='text' defaultValue={signupData.lastName}/>
            </FormControl>
            <FormControl>
                <FormLabel mb={0} mt={3}>Phone Number</FormLabel>
                <Input {...register('phone')} type="tel" defaultValue={signupData.phone} />
            </FormControl>
            <FormControl isInvalid={errors.email}>
                <FormLabel mb={0} mt={3}>Update Email</FormLabel>
                <Input type='email' {...register("email")} defaultValue={signupData.email} />
                <FormErrorMessage>
                {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <Button type='submit' isLoading={isSubmitting} m={3}>
                Submit
            </Button>
        </form>
    )
}

export default DetailSettings