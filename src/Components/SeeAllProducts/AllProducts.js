import React from 'react'
import { useSelector } from 'react-redux'
import FeatureCard from '../FeatureCard'
import ShowProducts from './ShowProducts'
import NavPhoto from '../NavPhoto'
import FeatureImg from './FeatureImg'

export default function AllProducts() {
    const productArrey = useSelector(state => state.AllProductSlice.dummyArray)

  return (
    <>
    <FeatureImg/>
      {productArrey.map((item, index)=>{
        return <ShowProducts product={item} key={index}/>
      })}
      
    </>
  )
}
