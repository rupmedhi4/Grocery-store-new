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
      navigate('/shoppingcart');
      alert('login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg=" linear-gradient(to right, #fd7551, #fe9031, #f1ae00, #d5cd00, #a8eb12);" // Add background color blue
      overflow={"hidden"}
    >
      <Heading as="h1"  color={"black"}>
        Login
      </Heading>
      <form onSubmit={submitHandler}  >
        <FormControl id="email" mb="4">
          <FormLabel color={"black"} fontWeight={"bold"}>Email address</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)}  variant={"outline"} bg={"linear-gradient(90deg, rgba(28,6,42,1) 0%, rgba(197,185,226,1) 0%, rgba(252,176,69,1) 100%);"}   _hover={{
            color: 'black',
            bg:"white",
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
          }}
          color={"black"}/>
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel color={"black"} fontWeight={"bold"}>Password</FormLabel>
          <Input type="password" onChange={(e) => setPassword(e.target.value)}  variant={"outline"} bg={"linear-gradient(90deg, rgba(28,6,42,1) 0%, rgba(197,185,226,1) 0%, rgba(252,176,69,1) 100%);"}   _hover={{
            color: 'black',
            bg:"white",
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
          }}
          color={"black"} />
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
