import React from 'react';
import { useSelector } from 'react-redux';


export default function PrivateRoutes({ component: Component, alt:Alt }) {

    const user = useSelector((state)=>(state.isLoginSlices.user))
    
  if (!user) {
   return <Alt/>
  }else{
    return <Component />;
  }
}