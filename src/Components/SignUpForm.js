import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpHandler } from './Redux/Slices/FirebaseSignupSlices';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();
  
  const submitHandler = () => {
    dispatch(SignUpHandler({name,email,password}));

  };
  
  return (

    <Box
    width="100vw"
    height="100vh"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    bg="  linear-gradient(to right, #f21677, #dd309f, #b94bbf, #8561d5, #3470dd);" // Add background color blue
    overflow={"hidden"}
    >
      
      <Heading as="h1" mb="8">
        Sign Up
      </Heading>
      <form onSubmit={submitHandler}>
      <FormControl id="text" mb="4">
        <FormLabel>Full Name</FormLabel>
        <Input type="text" onChange={(e)=>(setName(e.target.value))} bg={"white"}/>
      </FormControl>

      <FormControl id="email" mb="4">
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={(e)=>(setEmail(e.target.value))} bg={"white"}/>
      </FormControl>

      <FormControl id="password" mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={(e)=>(setPassword(e.target.value))} bg={"white"}/>
      </FormControl>

      <Button colorScheme="teal" mb="4" width="100%" onClick={submitHandler} bg={"#020024"} color={"white"}>
        Sign Up
      </Button>
      <Link href="#">Already have an account? Sign In</Link>
</form>
     
    </Box>
    
  );
};

export default SignUpForm;
