import './CartWidget.scss'
import logoCarrito from '../../assests/carrito.svg'
const CartWidget = () => {
  return (
    <div className="cartwidget">
      <img src={logoCarrito} alt="" />
    </div>
  )
}

export default CartWidget