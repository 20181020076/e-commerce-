import './CartWidget.scss'
import logoCarrito from '../../assests/carrito.svg'
import {cartContext} from '../../context/CartProvider'
import { useContext } from 'react'
const CartWidget = () => {
  const { cart } = useContext(cartContext)
  return (
    <div className="cartwidget">
      <img src={logoCarrito} alt="" />
      <p>{cart.length}</p>
    </div>
  )
}

export default CartWidget