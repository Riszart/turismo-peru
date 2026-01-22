import { Btn } from '../components/Button/Btn'
import { CardInfo } from '../components/CardInfo/CardInfo'

import './About.css'
import historia1 from '../assets/h.jpg'
import historia2 from '../assets/h2.jpg'
import historia3 from '../assets/h3.webp'
import icon1 from '../assets/icons/eco_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import icon2 from '../assets/icons/groups_2_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import icon3 from '../assets/icons/square_dot_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import icon4 from '../assets/icons/stars_2_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'

export function About(){
  return (
    <>
      <section className='content-about-top-main'>
        <div className='content-about-top'>
          <div className='about-content-left'>
            <span>nuestra herencia</span>
            <h1>Nuestra Pasión por el Perú</h1>
            <p>Elevando el arte de viajar a traves de la herencia cultural y el lujo autentico. Conozca la historia detras de sus mejores recuerdos en la tierra de los Incas </p>
            <Btn name={'Descubrir nuestra historia'}/>
          </div>
          <div className='about-content-right'>
            <div className='about-content-right-img'>
              <img src="https://inkscape.app/wp-content/uploads/imagen-vectorial.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='content-about-middle'>
        <div className='content-about-left'>
          <h2>Nuestra Historia</h2>
          <p>Todo comenzó con un viaje personal por el Valle Sagrado hace más de quince años. Lo que empezó como una exploración de raíces se convirtio en una mision de vida: compartir la verdadera esencia del Perú con el mundo. Sin comprometer el confor ni la autenticidad.</p>
          <p>Fundada po expertos locales apasionados por la antropologia y el servicio de guante bllanco. Peru Luxe Travel nacio para llenar el vacio entre turismo convewnciaonal y la inmercion cultural profunda</p>
          <section className='content-about-left-img'>
            <img className='content-about-left-img-up' src={historia2} alt="" />
            <img className='content-about-left-img-down' src={historia1} alt="" />
          </section>
        </div>
        <div className='content-about-right'> 
          <img className='content-about-card-img' src={historia3} alt="" />
          <div className='content-about-card-info'>
            <h3>El Equipo</h3>
            <p>No somos solo agentes de viajes: som,os curadores de experiencia. Nuestro Equipo esta compuesto por arqueólogos. chefts galardonados y logisticos expertos que viven y respiran la hospitalidad peruana</p>
            <span className='content-about-card-info-link'>Conoce a nuestro Expertos</span>
          </div>
        </div>
      </section>
      <section className='content-about-bottom'>
        <h3 className='content-about-bottom-h3'>Misión y Valores</h3>
        <span>Nos dedicamos a crear conexiones profundas entre nuestros viajeros y el alma del Perú, operando bajo estandares de excelencia y sostenibilidad.</span>
        <div>
          <CardInfo 
            icon={icon4}
            variant={'about'}
            title={"Excelencia"}
            description={"Servicio premium personalisado en cada paso, anticipándonos a cada una de sus necesidades"}
            />
          <CardInfo 
            icon={icon1}
            variant={'about'}
            title={"Sostenibilidad"}
            description={"Compromiso inquqbrantable con la perservación de nuestro patrimnonio natural y cultural"}
            />
          <CardInfo 
            icon={icon2}
            variant={'about'}
            title={"Impacto Local"}
            description={"Empoderamiento y apoyyo directo a la comunidades que nos abren sus puertas y corazones"}
            />
          <CardInfo 
            icon={icon3}
            variant={'about'}
            title={"Atención al Detalle"}
            description={"Desde el aroma de su habitación hasta la sincronía de sus traslados, la perfección está en lo invisible"}
            />
        </div>
      </section>
    </>
  )
}