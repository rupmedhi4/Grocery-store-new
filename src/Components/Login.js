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
import { Form, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase/FireBase';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/shoppingcart")
      alert("login")
    } catch (err) {
      alert(err.message)
    }

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
        Login
      </Heading>
      <form onSubmit={submitHandler}>
        <FormControl id="email" mb="4">
          <FormLabel>Email address</FormLabel>
          <Input type="email" onChange={(e) => (setEmail(e.target.value))} />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password</FormLabel>
          <Input type="password" onChange={(e) => (setPassword(e.target.value))} />
        </FormControl>
        <Button colorScheme="teal" mb="4" width="100%" onClick={submitHandler}>
          Sign In
        </Button>
        <Link href="#">Don't have an account? Sign Up</Link>
      </form>

    </Box>
  );
};

export default Login;
