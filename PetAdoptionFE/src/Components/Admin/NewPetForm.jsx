import React from "react";
import { useState, useContext } from "react";
import { PetContext } from "../../Contexts/petContext";
import { Flex, Heading, FormControl, Input, FormLabel, Select, Radio, HStack, RadioGroup, FormErrorMessage, Button} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

const NewPetForm = () => {
  const { onCreatePet } = useContext(PetContext);
  const { handleSubmit, control, register, formState: { errors },} = useForm();


  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('picture', data.picture[0]);
  
    Object.keys(data).forEach((key) => {
      if (key !== 'picture') {
        formData.append(key, data[key]);
      }
    });
  
    onCreatePet(formData);
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading fontSize="6xl" m={4}>
        New Pet Form
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="row" justify="space-between" flexWrap="wrap" w="100%">
          <Flex direction="column" flex={1} marginRight={4}>
            <FormControl mt={0} isInvalid={errors.name}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={errors.type}>
              <FormLabel>Type</FormLabel>
              <Input
                type="text"
                {...register("type", {
                  required: "Type is required",
                })}
              />
              <FormErrorMessage>
                {errors.type && errors.type.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={errors.status}>
              <FormLabel>Status</FormLabel>
              <Controller
                control={control}
                name="status"
                defaultValue="Available"
                rules={{ required: "Status is required" }}
                render={({ field }) => (
                  <Select {...field}>
                    <option value="Available">Available</option>
                    <option value="Fostered">Fostered</option>
                    <option value="Adopted">Adopted</option>
                  </Select>
                )}
              />
              <FormErrorMessage>
                {errors.status && errors.status.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={errors.bio}>
              <FormLabel>Bio</FormLabel>
              <Input
                type="text"
                {...register("bio", {
                  required: "Bio is required",
                })}
              />
              <FormErrorMessage>
                {errors.bio && errors.bio.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={errors.breed}>
              <FormLabel>Breed</FormLabel>
              <Input
                type="text"
                {...register("breed", { required: "Breed is required" })}
              />
              <FormErrorMessage>
                {errors.breed && errors.breed.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex direction="column" flex={1} align="center" justify="center">
            <FormControl mt={0} isInvalid={errors.height}>
              <FormLabel>Height</FormLabel>
              <Input
                type="number"
                {...register("height", {
                  required: "Height is required, must be a number",
                })}
              />
              <FormErrorMessage>
                {errors.height && errors.height.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={errors.weight}>
              <FormLabel>Weight</FormLabel>
              <Input
                type="number"
                {...register("weight", {
                  required: "Weight is required, must be a number",
                })}
              />
              <FormErrorMessage>
                {errors.weight && errors.weight.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={errors.color}>
              <FormLabel>Color</FormLabel>
              <Input
                type="text"
                {...register("color", {
                  required: "Color is required",
                })}
              />
              <FormErrorMessage>
                {errors.color && errors.color.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={errors.hypoallergenic}>
              <FormLabel>Hypoallergenic</FormLabel>
              <Controller
                control={control}
                name="hypoallergenic"
                defaultValue="true"
                render={({ field }) => (
                  <Select {...field}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </Select>
                )}
              />
              <FormErrorMessage>
                {errors.hypoallergenic && errors.hypoallergenic.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={errors.dietaryRestrictions}>
              <FormLabel>Dietary Restrictions</FormLabel>
              <Input
                type="text"
                {...register("dietaryRestrictions", {
                  required: "Dietary Restrictions are required",
                })}
              />
              <FormErrorMessage>
                {errors.dietaryRestrictions &&
                  errors.dietaryRestrictions.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
        </Flex>
        <Flex direction="column" mt={4} justify="center" align="center">
          <FormControl mt={0} isInvalid={errors.picture}>
            <FormLabel>Picture</FormLabel>
              <Input
                type="file"
                {...register("picture", { required: "A picture is required" })}
              />
            <FormErrorMessage>
              {errors.picture && errors.picture.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" m={5} colorScheme="whatsapp">Submit</Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default NewPetForm;
