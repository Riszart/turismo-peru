import './Footer.css'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import tiktok from '../../assets/tiktok.png'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

export function Footer(){
  return (
    <>
      <footer className='footer-content'>
        <section className='footer-content-left'>
          <img src={logo} alt="" />
          <p>Lideres en turismo de lujo en Sudamerica, conectando viajeros con el corazón cultural de los Andes</p>
        </section>
        <section className='footer-content-center'>
          <h4>Empresa</h4>
          <ul>
            <li className='footer-content-li'><Link to={'/About'}>Sobre Nosotros</Link></li>
            <li className='footer-content-li'><a href="#">Responsabilidad</a></li>
            <li className='footer-content-li'><a href="#">Carreras</a></li>
            <li className='footer-content-li'><a href="#">Bloq de Viajes</a></li>
          </ul>
        </section>
        <section className='footer-content-center'>
          <h4>Destinos</h4>
          <ul>
            <li className='footer-content-li'><Link to={'/Contact'}>Cusco & Machu Picchu</Link></li>
            <li className='footer-content-li'><Link to={'/Contact'}>Amazonas</Link></li>
            <li className='footer-content-li'><Link to={'/Contact'}>Valle Sagrado</Link></li>
            <li className='footer-content-li'><Link to={'/Contact'}>Puno & Titicaca</Link></li>
          </ul>
        </section>
        <section className='footer-content-right'>
          <h4>Siguenos</h4>
          <div className='footer-content-imgs'>
            <a href="#"><img src={instagram} alt="" /></a>
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={tiktok} alt="" /></a>
          </div>
          <p>@ 2024 Turismo Perú. Todos los derechos reservados</p>
        </section>
      </footer>
    </>
  )
}