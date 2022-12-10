import { useState, useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss'
const ItemDetail = ({ productSelected }) => {
  const [count, setCount] = useState(1);
  const { cart, addToCart } = useContext(cartContext);
  // console.log(productSelected);
  return (
    <div className='detail'>
      <div className='detail__cart'>
      <h1>Esto es la cantidad de productos en tu carrito {cart.length}</h1>
      </div>
      <div className='detail__container'>
        <div className='detail__container__image'>
          <img
            alt={productSelected.title}
            src={`/images/${productSelected.image}`}
            width={'300px'}
          />
        </div>
        
        <div className='detail__container__description'>
          <h2>{productSelected.name}</h2>
          <h2>{productSelected.title}</h2>
          <h2>{productSelected.description}</h2>
          <h2>{productSelected.category}</h2>
          <h2>{productSelected.price}</h2>
          <h2>{count}</h2>
          <ItemCount setCount={setCount} />
          <button onClick={() => addToCart(productSelected, count)}>
            Agregar al carrito
          </button>
        </div>
      </div>
      
      
    </div>
  );
};

export default ItemDetail;