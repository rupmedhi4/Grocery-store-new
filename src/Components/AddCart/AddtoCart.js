import React from 'react';
import { useSelector } from 'react-redux';
import ShowCart from './ShowCart';
import { HStack, Stack, Spacer, VStack, Flex } from '@chakra-ui/react';
import TotalAmount from './TotalAmount';
import CartModal from './CartModal';
import CartDrawer from './CartDrawer';

export default function AddToCart() {
  const user = useSelector((state) => state.ShoppingCartSlices.addToCart);

  return (
    <Flex justifyContent="center">
      <VStack spacing={4}>
        <Flex alignItems="flex-start">
          <TotalAmount />
          <CartModal/>
          <CartDrawer/>
        </Flex>

        <Stack spacing={4}>
          {user.map((addcart) =>
            addcart.map((item) => (
              <ShowCart item={item} key={item.id} />
            ))
          )}
        </Stack>
      </VStack>
    </Flex>
  );
}
