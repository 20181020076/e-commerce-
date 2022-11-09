import CartWidget from "../CartWidget/CartWidget";
import logoPrincipal from "../../assests/logo.svg";
import menuIcono from "../../assests/menu.svg";
import './NavBar.scss'
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__menu">
        <img src={menuIcono} alt="" />
      </div>
      <div className="navbar__logo">
        <img src={logoPrincipal} alt="" />
      </div>
      <div className="navbar__lista">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Log in</a></li>
          <li><a href="">sign in</a></li>
        </ul>
      </div>
      
      <CartWidget/>

    </div>
  )
}

export default NavBar