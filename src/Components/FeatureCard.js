import React from 'react';
import { Box, Image, Heading, Text, Divider, Button, ButtonGroup, Card, CardBody, Stack, CardFooter, Flex } from '@chakra-ui/react';

export default function FeatureCard({ product }) {
  return (
    <Box  
    display="inline-block"
    marginLeft={['2rem', '7.5rem', '7.5rem']}
    marginEnd={['2rem', '2.5rem', '2.5rem']}
    mt={['2rem', '2rem', '3rem']} 
    direction={{ base: 'column', sm: 'row' }}
  >
  
    <Card maxW={['90vw', 'sm', 'sm']} margin="-40px" mt={['1rem', '1rem', '1rem']}>
     
        <CardBody justifySelf="center" bg="grey" >
          <Image
            src={product.img}
            alt="Product"
            width={['100%', '300px', '300px']}
            height={['auto', '200px', '200px']}
            borderRadius="lg"
            justifySelf="center"
          />
        </CardBody>

        <Divider />

        <Box justifySelf="center" mt="1rem">

          <Stack spacing="3" justifySelf="center">
            <Heading size="md" textAlign="center">
              {product.title}
            </Heading>
            <Text textAlign="center">{product.paragraph}</Text>
          </Stack>

        </Box>

        <CardFooter>
          <Flex justifyContent="center" marginLeft="3rem">
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </Flex>
        </CardFooter>
  
    </Card>
  </Box>
  );
}
