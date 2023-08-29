import { createContext, useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

// const baseUrlPets = `${process.env.REACT_APP_BACKEND_URL}api/all-pets`; 
// for deployment will change everything to this

export const PetProvider = ({ children }) => { 
    const toast = useToast();
    const [savedPets, setSavedPets] = useState([]);
    const [fosteredPets, setFosteredPets] = useState([]);
    const [adoptedPets, setAdoptedPets] = useState([]);
    const [userPets, setUserPets] = useState([]); 
    const [pets, setPets] = useState([])
    const baseUrlPets = `${process.env.REACT_APP_BACKEND_URL}api/all-pets`; 
    
    //All Pets
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(baseUrlPets);
            // `http://localhost:8080/api/all-pets`
            setPets(res.data);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchData();
    }, [pets]);
      

    const getPetById = (petId) => {
        return pets.find((pet) => pet.id === petId);
    };
    
    
    //Saved Pets
    const onSavePet = async (petId) => {
        try {
            const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
            const token = localStorage.getItem('token');
            const response = await axios.put(
              `${baseUrlPets}/liked`,  /* `http://localhost:8080/api/all-pets/liked` */
              { userId, petId },
              {headers: { Authorization: `Bearer ${token}`}}
            );
            if(response.status === 200) {
                console.log(response.data)
                console.log(userId, petId)
                toast({
                    title: "Pet Saved",
                    description: "This pet has been saved to your profile.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }else if(response.status === 401){
                toast({
                    title: "Oh No!",
                    description: "It seems you need to login.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    

    const fetchUserSavedPets = async () => {
        try {
            const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
            const response = await axios.get(`${baseUrlPets}/saved/${userId}`); /* http://localhost:8080/api/all-pets/saved/${userId} */
            setSavedPets(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    //Unsave Saved Pet
    const undoSavePet = async (petId) => {
        try {
            const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
            const response = await axios.put(`${baseUrlPets}/unsave`, { userId, petId }); /* http://localhost:8080/api/all-pets/unsave */
            if(response.status === 200) {
                toast({
                    title: "Pet Unsaved",
                    description: "This pet has been unsaved from your profile.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }else{
                toast({
                    title: "Oh No!",
                    description: "There was a problem unsaving this pet.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };



    //Fostered Pets
    const onFosterPet = async (petId) => {
        try {
            const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
            const response = await axios.put(`${baseUrlPets}/fostered`, { userId, petId }); /* `http://localhost:8080/api/all-pets/fostered` */
            if(response.status === 200) {
                console.log(response.data)
                console.log(userId, petId)
                toast({
                    title: "Yay You're a Foster Parent!",
                    description: "Come pick up your new foster pet!",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }else{
                toast({
                    title: "Oh No!",
                    description: "There was a problem fostering this pet.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchUserFosteredPets = async () => {
        try {
            const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
            const response = await axios.get(`${baseUrlPets}/getFostered/${userId}`); /* http://localhost:8080/api/all-pets/getFostered/${userId} */
            setFosteredPets(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    //Unfoster Pet
    const returnFosteredPet = async (petId) => {
        try {
            const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
            const response = await axios.put(`${baseUrlPets}/returnFostered`, { userId, petId }); /* http://localhost:8080/api/all-pets/returnFostered */
            if(response.status === 200) {
                console.log(response.data)
                console.log(userId, petId)
                toast({
                    title: "Pet Returned",
                    description: "We're sorry you had to return your pet. Check out our others!",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }else{
                toast({
                    title: "Oh No!",
                    description: "There was a problem returning this pet.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    //Adopted Pets
    const onAdoptPet = async (petId) => {
        try {
            const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
            const response = await axios.put(`${baseUrlPets}/adopted`, { userId, petId }); /* http://localhost:8080/api/all-pets/adopted */
            if(response.status === 200) {
                console.log(response.data)
                console.log(userId, petId)
                toast({
                    title: "Yay You're a Pet Parent!",
                    description: "Come pick up your new best friend!",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }else{
                toast({
                    title: "Oh No!",
                    description: "There was a problem adopting this pet.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchUserAdoptedPets = async () => {
        try {
            const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
            const response = await axios.get(`${baseUrlPets}/getAdopted/${userId}`); /* http://localhost:8080/api/all-pets/getAdopted/${userId} */
            setAdoptedPets(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    
    //Return Adopted Pet
    const returnAdoptedPet = async (petId) => {
        try {
            const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
            const response = await axios.put(`${baseUrlPets}/returnAdopted`, { userId, petId }); /* http://localhost:8080/api/all-pets/returnAdopted */
            if(response.status === 200) {
                console.log(response.data)
                console.log(userId, petId)
                toast({
                    title: "Pet Returned",
                    description: "We're sorry you had to return your pet.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }else{
                toast({
                    title: "Oh No!",
                    description: "There was a problem returning this pet.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };


    
    //Update Pet
    const onUpdatePet = async (petId, data) => {
        try{
            const response = await axios.put(`${baseUrlPets}/update/${petId}`, data); /* http://localhost:8080/api/all-pets/update/${petId} */
            if(response.status === 200) {
                console.log(response.data)
                console.log(petId, data)
                toast({
                    title: "Pet Updated",
                    description: "This pet has been updated.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }else{
                toast({
                    title: "Oh No!",
                    description: "There was a problem updating this pet.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        }catch(error){
            console.log(error);
        }
    };
    
    //Create Pet
    const onCreatePet = async (formData) => {
        try {
          const response = await axios.post(
            `${baseUrlPets}/create`, /* http://localhost:8080/api/all-pets/create */
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          if (response.status === 200) {
            console.log(response.data);
            console.log(formData);
            toast({
              title: 'Pet Created',
              description: 'This pet has been added to our site.',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
          } else {
            toast({
              title: 'Oh No!',
              description: 'There was a problem creating this pet.',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
          }
        } catch (error) {
            toast({
                title: 'Oh No!',
                description: 'There was a problem creating this pet.',
                status: 'error',
                duration: 5000,
                isClosable: true,
              });
            console.log(error);
        }
    };

    //User Pets
    const userAdopted = async (userId) => {
        try {
            const response = await axios.get(`${baseUrlPets}/user/${userId}`); /* http://localhost:8080/api/all-pets/user/${userId} */
            setUserPets(response.data.pets);
        } catch (error) {
            console.log(error);
        }
    };
      



    return (
        <PetContext.Provider value={{ undoSavePet, returnFosteredPet, baseUrlPets, returnAdoptedPet, userPets, userAdopted, onCreatePet, onUpdatePet, onSavePet, pets, fetchUserSavedPets, savedPets, setSavedPets, onFosterPet, fetchUserFosteredPets, setFosteredPets, fosteredPets, adoptedPets, fetchUserAdoptedPets, onAdoptPet, /* baseUrlPets */ }}>
        {children}
        </PetContext.Provider>
    );
}
export const PetContext = createContext();