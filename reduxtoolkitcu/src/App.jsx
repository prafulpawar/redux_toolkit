import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import Two from './components/Two'
import {asyncgetproducts} from  './Action/productAction'
import { useEffect } from "react";
function App() {
   
 

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
   console.log(products)
  useEffect(() => {
      products.length === 0 && dispatch(asyncgetproducts());
  }, []);
  return (
    <div>

      <Two/>

    </div>  
  )
}

export default App