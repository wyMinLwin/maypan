import React from 'react'
import { useAppSelector } from '../store'

const ProductsPage = () => {
  const data = useAppSelector(state => state.data.products);
  return (
    <div>ProductsPage</div>
  )
}

export default ProductsPage