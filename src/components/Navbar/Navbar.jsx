import { BtnLink} from'../Button/Btn.jsx'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import menu from '../../assets/icons/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import { useState } from 'react'

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

export function NavbarMobile() {
  const [isOpenNav, setIsOpenNav] = useState(false)

  const toggleMenu = ()=>{
    setIsOpenNav(!isOpenNav)
  }

  return (
    <>
      <nav className='nav-bar '>
        <section className='mobile'>
          <div>
            <Link to='/' className='nav-bar-img'><img src={logo} alt="" /></Link>
          </div>
          <img onClick={toggleMenu} className='burger-nav' src={menu} alt="" />
        </section>
        <div className={isOpenNav? '':'active'}>
          <ul className='nav-bar-ul-mobile'>
            <li className='nav-bar-li-mobile'>
              <Link to='/' className='nav-bar-a nav-bar-a-mobile' >Inicio</Link>
            </li>
            <li className='nav-bar-li-mobile'>
              <Link to='/About' className='nav-bar-a nav-bar-a-mobile'>Nosotros</Link>
            </li>
            <li className='nav-bar-li-mobile'>
              <Link to='/Contact' className='nav-bar-a nav-bar-a-mobile'>Contactanos</Link>
            </li>
          </ul>          
        </div>
      </nav></>
  )
}