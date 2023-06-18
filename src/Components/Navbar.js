import React from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  IconButton,
  ChakraProvider,
  Link,
  useDisclosure,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FcShop } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase/FireBase';
import { useSelector } from 'react-redux';
import CartDrawer from './AddCart/CartDrawer';

const Navbar = () => {
  const user = useSelector((state) => state.isLoginSlices.user);
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  const loginHandler = async () => {
    navigate('/login');
  };

  const signupHandler = () => {
    navigate('/signup');
  };

  const signOutHandler = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      alert(err.message);
    }
  };

  const addtoCartHandler = () => {
    navigate('/addcart');
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      color="white"
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="md"
      flexWrap="wrap"
      bg={"#c92c80"}
    >
      <Flex align="center" flexGrow={1} order={{ base: 2, md: 1 }} >
        <IconButton
          icon={<FcShop size="2.5rem" />}
          size="xl"
          backgroundColor="transparent"
          aria-label="Shopping Logo"
          mr={2}

        />
        <Link
          href="/"
          mr={4}
          textDecoration="none"
          _hover={{
            color: 'black',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          Home
        </Link>
        {user && (
          <Link
            href="/shoppingcart"
            mr={4}
            textDecoration="none"
            _hover={{
              color: 'black',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            Shop
          </Link>
        )}
        <Link
          href="/allProducts"
          mr={4}
          textDecoration="none"
          _hover={{
            color: 'black',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          Featured
        </Link>
        <Link
          href="/contact"
          mr={4}
          textDecoration="none"
          _hover={{
            color: 'black',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          Recommended
        </Link>
      </Flex>

      <Flex align="center" flex={1} mt={{ base: 4, md: 0 }} order={{ base: 1, md: 2 }}>
        <Box flex={1} mr={2}>
          <Input
            variant="filled"
            bg="white"
            _placeholder={{ color: 'gray' }}
            _hover={{
              border: '1px solid #ccc',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              bg:"dd2a6f"
            }}
            placeholder="Search"
          />
        </Box>
        <IconButton
          icon={<SearchIcon />}
          size="xl"
          backgroundColor="transparent"
          aria-label="Search Icon"
          mr={6}
        />
      </Flex>

      <Flex align="center" order={{ base: 3, md: 3 }}>
        {user ? (
          <>
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={signOutHandler}
              mr={4}
              _hover={{
                border: '1px solid #ccc',
                bg: 'orange',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              }}
              bg={'#b2e4ed'}
            >
              Sign Out
            </Button>

            <CartDrawer />
          </>
        ) : (
          <>
            <Button
              colorScheme="teal"
              variant="outline"
              mr={2}
              onClick={signupHandler}
              _hover={{
                border: '1px solid #ccc',
                bg: 'orange',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              }}
              bg={"#36031e"}
            >
              Sign Up
            </Button>
            <Button colorScheme="teal" onClick={loginHandler} mr={4} 
              variant="outline"
           
              _hover={{
                border: '1px solid #ccc',
                bg: 'orange',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              }}
              bg={"#36031e"}>
              Login
            </Button>
          </>
        )}
      </Flex>


    </Flex>
  );
};

export default Navbar;
