import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';


export const AuthProvider = ({ children }) => {
  const { onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();
  const { reset } = useForm();
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [signupData, setSignupData] = useState([]);
  const baseUrlUsers = `${process.env.REACT_APP_BACKEND_URL}api/all-users`;



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseUrlUsers); /* http://localhost:8080/api/all-users */
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
}, [users]);


  //Current User Data
  useEffect(() => {
    if (isLoggedIn) {
      const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
      const token = localStorage.getItem('token');
  
      const fetchData = async () => {
        try {
          const res = await axios.get(`${baseUrlUsers}/currentUser`,  /* http://localhost:8080/api/all-users/currentUser */
            { 
              headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              userId: userId,
            },
          });
          setSignupData(res.data);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData();
    } else {
      console.log('No user logged in');
    }
  }, [isLoggedIn]);
  
  //Signup
  const onSubmitSignup = async (data) => {
    try {
      const res = await axios.post(baseUrlUsers, data, /*  http://localhost:8080/api/all-users */
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        console.log(res.data);
        const token = res.data.token;
        localStorage.setItem('token', token);
        console.log(signupData);
        setIsLoggedIn(res.data.isLoggedIn);
        localStorage.setItem('signupDataLocal', JSON.stringify(res.data.payload, res.data.isLoggedIn));
        navigate('/dashboard');
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        onClose();
        reset();
      }
    } catch (error) {
      console.log(error);
      if(error.response.status === 409){
        toast({
          title: 'Failed to create account.',
          description: 'The email you used already exists in our system.',
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
        onClose();
        reset();
      }
    }
  };
  //Login
  const onSubmitLogin = async (data) => {
    try{
      const response = await axios.post(`${baseUrlUsers}/login`, data) /* http://localhost:8080/api/all-users/login */
      if(response.status === 200){
        console.log(response.data)
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('signupDataLocal', JSON.stringify(response.data.payload, response.data.isLoggedIn));
        setSignupData(response.data);
        setIsLoggedIn(response.data.isLoggedIn);
        navigate('/dashboard');
        toast({
          title: 'Welcome Back!',
          description: "Successfully logged in!",
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        onClose();
        reset();
      }
    } catch (error) {
      console.log(error)
      toast({  
        title: 'An error occurred.',
        description: "Unable to login.",
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  //Edit Details
  const onSubmitEditUserDetails = async (data) => {
    const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
    const token = localStorage.getItem('token');
    try{
      const response = await axios.put(`${baseUrlUsers}/updatePersonalDetails`, { userData: data }, /* http://localhost:8080/api/all-users/updatePersonalDetails */
        {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          userId: userId,
        },
      })
      if(response.status === 200){
        toast({
          title: 'Success!',
          description: "Your details have been updated!",
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      }else{
        toast({
          title: 'An error occurred.',
          description: "Unable to update your details.",
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error)
      toast({
        title: 'An error occurred.',  
        description: "Unable to update your details.",
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };
  //Password update
  const onSubmitUpdatePassword = async (data) => {
    const userId = JSON.parse(localStorage.getItem('signupDataLocal')).id;
    const token = localStorage.getItem('token');
    try{ 
      const response = await axios.put(`${baseUrlUsers}/updatePassword`, { userData: data }, /* http://localhost:8080/api/all-users/updatePassword */
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          userId: userId,
        },
      })
      if(response.status === 200){
        toast({
          title: 'Success!',
          description: "Your password has been updated! Don't forget it ;)",
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      }else{
        toast({
          title: 'An error occurred.',
          description: "Unable to update your password.",
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      }
    }catch (error) {
      console.log(error)
      toast({
        title: 'An error occurred.',
        description: "Unable to update your password.",
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };


  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);
  

  return (
    <AuthContext.Provider value={{ users, isLoggedIn, setIsLoggedIn, signupData, onSubmitLogin, onSubmitSignup, onSubmitEditUserDetails, onSubmitUpdatePassword }}>
      {children}
    </AuthContext.Provider>
  );
};
  


export const AuthContext = createContext();