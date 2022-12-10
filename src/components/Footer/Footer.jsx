import './Footer.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import  { faInstagram , faFacebook, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__lista">
            <div className="footer__lista__titulo">
                menu principal
            </div>
            <div className="footer__lista__lista">
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/Products'}>Lista Completa</NavLink></li>
                    <li><NavLink to={'/Products/camisetas'}>Camisetas</NavLink></li>
                    <li><NavLink to={'/Products/pantalones'}>Pantalones</NavLink></li>
                </ul>
            </div>
            
        </div>
        <div className='footer__redes'>
            <div className='footer__redes__titulo'>
                Siguenos en:
            </div>
            <div className='footer__redes__lista'>
                <ul>
                    <li>{<FontAwesomeIcon icon={faInstagram}/>}</li>
                    <li>{<FontAwesomeIcon icon={faFacebook} />}</li>
                    <li>{<FontAwesomeIcon icon={faTwitter} />}</li>
                    <li>{<FontAwesomeIcon icon={faWhatsapp} />}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer