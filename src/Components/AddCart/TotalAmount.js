import { Box, Card, CardBody, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

export default function TotalAmount() {
    let totalAmount = 0;
    const user = useSelector((state) => state.ShoppingCartSlices.addToCart);


    return (
        <>
        {user.map((singleProduct)=>(
            singleProduct.map((items) => {
                totalAmount += items.amount;
            })
        ))}
         <Flex justifyContent="center">
            <Box width="md" margin="4">
                <Card height="auto" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <CardBody display="flex" justifyContent="center" alignItems="center">
                        <VStack spacing={2} align="center">
                            <HStack spacing={2} >
                                {/* <Text fontSize="sm">Total Quantity: {cart.quantity}</Text> */}
                                <Text fontSize="sm">Total Amount: {totalAmount}</Text>
                            </HStack>
                        </VStack>
                    </CardBody>
                </Card>
            </Box>
        </Flex>
        </>
       
    );
}
