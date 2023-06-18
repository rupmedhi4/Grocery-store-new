import React from 'react'
import FeatureCard from './FeatureCard'
import { Box, Image, Heading, Text, Divider, Button, ButtonGroup, Card, CardBody, Stack, CardFooter, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AllProducts from './SeeAllProducts/AllProducts';


export default function Products() {
  const itemArrey = [

    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    }
    , {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
      title: 'Dummy Title 2',
      paragraph: 'Paragraph 2'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    }
    , {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
      title: 'Dummy Title 2',
      paragraph: 'Paragraph 2'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    }
    , {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
      title: 'Dummy Title 2',
      paragraph: 'Paragraph 2'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    }
    , {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
      title: 'Dummy Title 2',
      paragraph: 'Paragraph 2'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    }
    , {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
      title: 'Dummy Title 2',
      paragraph: 'Paragraph 2'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    }
    , {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
      title: 'Dummy Title 2',
      paragraph: 'Paragraph 2'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    }
    , {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
      title: 'Dummy Title 2',
      paragraph: 'Paragraph 2'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
      title: 'Dummy Title 20',
      paragraph: 'Paragraph 20'
    },

  ]
const navigate = useNavigate();
  const AllProductHandler = () => {
    navigate("/allProducts")
  }

  
  return (
    <>
      <Flex
        mt={"4rem"}
        marginLeft={"5.5rem"}
        mb={"-4%"}
        fontSize="2.5rem"
        fontWeight={"bold"}
        justifyContent="space-between"
        alignItems="center"
        marginRight={"6rem"}
      >
        <Text>Featured Products</Text>
        <Button onClick={AllProductHandler}>See All</Button>
      </Flex>


      {itemArrey.map((products, index) => (
        <FeatureCard product={products} key={index} />
      ))}
    </>
  )
}
