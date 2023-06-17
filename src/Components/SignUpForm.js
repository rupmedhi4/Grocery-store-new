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
      width="400px"
      padding="4"
      margin="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      
      <Heading as="h1" mb="8">
        Sign Up
      </Heading>
      <form onSubmit={submitHandler}>
      <FormControl id="text" mb="4">
        <FormLabel>Full Name</FormLabel>
        <Input type="text" onChange={(e)=>(setName(e.target.value))}/>
      </FormControl>

      <FormControl id="email" mb="4">
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={(e)=>(setEmail(e.target.value))}/>
      </FormControl>

      <FormControl id="password" mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={(e)=>(setPassword(e.target.value))}/>
      </FormControl>

      <Button colorScheme="teal" mb="4" width="100%" onClick={submitHandler}>
        Sign Up
      </Button>
      <Link href="#">Already have an account? Sign In</Link>
</form>
     
    </Box>
    
  );
};

export default SignUpForm;
