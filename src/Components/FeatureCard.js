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
      overflow={'hidden'}
    >
      <Card maxW={['90vw', 'sm', 'sm']} margin="-40px" mt={['1rem', '1rem', '1rem']} bg={"#8c0d6c"}>
        <CardBody justifySelf="center" bg={"#8c0d6c"}>
          <Box
            position="relative"
            width="100%"
            height={['auto', '200px', '200px']}
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image src={product.img} alt="Product" width="100%" height="100%" objectFit="cover" />
          </Box>
        </CardBody >

        {/* <Divider bg={"#cc162c"}/> */}

        <Box justifySelf="center" mt="1rem"bg={"#cc162c"} marginTop={"-10"} >
          <Stack spacing="3" justifySelf="center">
            <Heading size="md" textAlign="center">
              {product.title}
            </Heading>
            <Text textAlign="center">{product.paragraph}</Text>
          </Stack>
        </Box>

        <CardFooter bg={"#cc162c"} mb={"7"}>
          <Flex justifyContent="center" marginLeft="3rem">
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="blue"
                _hover={{ bg: 'orange' }}
                transition="background-color 0.3s"
                bg={"#4a0429"}
                color={"white"}
              >
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue" bg={"#4a0429"}  _hover={{ bg: 'orange' }}
                transition="background-color 0.3s">
                Add to cart
              </Button>
            </ButtonGroup>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
  );
}
