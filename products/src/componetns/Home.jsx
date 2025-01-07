import React, { useEffect } from 'react'
import axios from 'axios'
function  Home() {
   useEffect(()=>{
      function fetchData(){
          const res = axios.get('https://fakestoreapi.com/products')
      }
   })


  return (
    <div>Home</div>
  )
}

export default Home