import React from 'react'
import { useSelector } from 'react-redux'

function Two() {
    const products = useSelector((state) => state.products)
    console.log(products)
  return (
    <div>Two</div>
  )
}

export default Two