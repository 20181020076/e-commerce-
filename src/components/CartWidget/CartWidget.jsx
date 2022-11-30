import './CartWidget.scss'
import logoCarrito from '../../assests/carrito.svg'
const CartWidget = () => {
  return (
    <div className="cartwidget">
      <img src={logoCarrito} alt="" />
      <p>1</p>
    </div>
  )
}

export default CartWidget