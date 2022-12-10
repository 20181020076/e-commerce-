import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'



const Item = ({product}) => {

  return (
    <Link to={`/Item/${product.id}`}>
        <div  className='item'>
          <div className='item__imagen'>
            <img src={`/images/${product.image}`} alt="" />
          </div>
          <div className='item__text'>
            <h2>{product.name}</h2>
            <h2>{product.color}</h2>
            <h2>{product.price}</h2>
            <h2>Existencia: {product.stock} productos</h2>
            
            
          </div>
          
        </div>
    </Link>
    
  )
}

export default Item