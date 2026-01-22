import { BtnLink} from'../Button/Btn.jsx'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import './Navbar.css'

export function Navbar(){
  return (
    <>
      <nav className='nav-bar'>
        <div>
          <Link to='/' className='nav-bar-img'><img src={logo} alt="" /></Link>
        </div>
        <ul className='nav-bar-ul'>
          <li className='nav-bar-li'>
            <Link to='/' className='nav-bar-a' >Inicio</Link>
          </li>
          <li className='nav-bar-li'>
            <Link to='/About' className='nav-bar-a'>Nosotros</Link>
          </li>
          <li className='nav-bar-li'>
            <Link to='/Contact' className='nav-bar-a'>Contactanos</Link>
          </li>
        </ul>
        <BtnLink name={'reserva ahora'}/>
      </nav>
    </>
  )
}