import React from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  IconButton,
  ChakraProvider,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FcShop } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { auth } from "./Firebase/FireBase";
import { useSelector } from "react-redux";
import CartDrawer from "./AddCart/CartDrawer";

import AddtoCart from "./AddCart/AddtoCart";
import ShoppingCartSlices from "./Redux/Slices/ShoppingCartSlices";

const Navbar = () => {
  const user = useSelector((state) => state.isLoginSlices.user);
  const addToCartBadge = useSelector((state) => state.ShoppingCartSlices.addToCart);

  const { onOpen } = useDisclosure();
  const navigate = useNavigate();

  const loginHandler = async () => {
    navigate("/login");
  };

  const signupHandler = () => {
    navigate("/signup");
  };

  const signOutHandler = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      alert(err.message);
    }
  };
  const addtoCartHandler =  () => {
   navigate("/addcart")
  };

  return (
    <>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      bg="blue.800"
      color="white"
      position={"sticky"}
    >
      <Box marginLeft={"6rem"}>
        <IconButton
          icon={<FcShop size={"2.5rem"} />}
          size="xl"
          backgroundColor="blue"
          aria-label="Shopping Logo"
          marginRight={2}
        />
        {/* Home Link */}
        <Link
          href="/"
          marginRight={4}
          style={{ textDecoration: "none" }}
          _hover={{
            color: "red",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          Home
        </Link>
        {user ?
          <Link
                  href="/shoppingcart"
                  marginRight={4}
                  style={{ textDecoration: "none" }}
                  _hover={{
                    color: "red",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Shop
                </Link> : null
        }
        
        <Link
          href="/allProducts"
          marginRight={4}
          style={{ textDecoration: "none" }}
          _hover={{
            color: "red",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          Featured
        </Link>
        <Link
          href="/contact"
          marginRight={4}
          style={{ textDecoration: "none" }}
          _hover={{
            color: "red",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          Recommended
        </Link>
      </Box>

      <Flex align="center">
        {/* Search Input */}
        <Input
          variant="filled"
          bg="white"
          marginRight={2}
          _placeholder={{ color: "gray" }}
          _hover={{
            border: "1px solid #ccc",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          }}
          placeholder="Search"
        />
        <IconButton
          icon={<FcShop size={"2.5rem"} />}
          size="xl"
          backgroundColor="blue"
          aria-label="Shopping Logo"
          marginRight={"6rem"}
        />

        {/* Sign Up Button */}
        <Flex marginRight={"7rem"}>
          {user ? (
            <>
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={signOutHandler}
              >
                Sign Out
              </Button>
              {/* <Button
                colorScheme="teal"
                variant="solid"
                onClick={onOpen}
              >
               add to cart{addToCartBadge.length}
              </Button> */}
              <CartDrawer/>
              
            </>
          ) : (
            <>
              <Button
                colorScheme="teal"
                variant="outline"
                marginRight={2}
                onClick={signupHandler}
              >
                Sign Up
              </Button>
              {/* Login Button */}
              <Button
                marginRight={"4"}
                colorScheme="teal"
                variant="solid"
                onClick={loginHandler}
              >
                Login
              </Button>
            </>
          )}
        </Flex>
      </Flex>
      <ColorModeSwitcher />
    </Flex>
    
    </>
    
  );
};

export default Navbar;
