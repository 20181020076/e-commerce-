import CartWidget from "../CartWidget/CartWidget";
import logoPrincipal from "../../assests/logo.svg";
import menuIcono from "../../assests/menu.svg";
import './NavBar.scss'
import { NavLink,Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__menu">
        <img src={menuIcono} alt="" />
      </div>
      <div className="navbar__logo">
        <Link to={'/'}>
          <img src={logoPrincipal} alt="" />
        </Link>
      </div>
      <div className="navbar__lista">
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/Products'}>Lista Completa</NavLink></li>
          <li><NavLink to={'/Products/camisetas'}>Camisetas</NavLink></li>
          <li><NavLink to={'/Products/pantalones'}>Pantalones</NavLink></li>

          {/* <li><NavLink to={'/About'} activeClassName = 'active'>About us</NavLink></li>
          <li><NavLink to={'/Contact'} activeClassName = 'active'>Contact</NavLink></li>
          <li><NavLink to={'/Log'} activeClassName = 'active'>Log in</NavLink></li>
          <li><NavLink to={'/Sign'} activeClassName = 'active'>Sign in</NavLink></li> */}
        </ul>
      </div>
      
      <Link to="/Cart"><CartWidget/></Link>

    </div>
  )
}

export default NavBar