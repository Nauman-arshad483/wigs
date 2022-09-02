import React from 'react'
import {Link} from "react-router-dom"
import "./Product.css"
const Product = ({product}) => {
  return (
    <Link className='productCard' to={`/product/${product._id}`}>
     <img src={product.images[0]} alt={product.title} />
    <p>{product.title}</p>
    <span>{`$ ${product.price}`}</span>
    </Link>
  )
}

export default Product