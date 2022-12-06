import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <Link to={`/Item/${product.id}`}>
        <div style={{ border: '1px solid red' }}>
          <img src={`/images/${product.image}`} alt="" />
          <h2>{product.name}</h2>
          <h2>{product.color}</h2>
          <h2>{product.price}</h2>
          <h2>Existencia: {product.stock} productos</h2>
        </div>
    </Link>
    
  )
}

export default Item