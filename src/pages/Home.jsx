import { CardSite } from '../components/CardSite/CardSite.jsx'
import { Btn } from '../components/Button/Btn.jsx'
import './Home.css'
import img1 from "../assets/480680442_1166316134859027_3076274080446150435_n.jpg"
import img2 from "../assets/497520885_1104075111740441_7626205467514992514_n.jpg"
import img3 from "../assets/images.jpg"
import { CardInfo } from '../components/CardInfo/CardInfo.jsx'
import icon1 from "../assets/icons/hotel_class_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import icon2 from "../assets/icons/local_dining_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import icon3 from "../assets/icons/map_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import icon4 from "../assets/icons/security_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"

export function Home(){
  return (
    <>
      <div className='center-100'>
          <section className='content-banner'>
          <h1 className='content-banner-h1'>Descubre la <span >Magia</span> del Perú</h1>
          <p className='content-banner-p-main'>Experiencias de viajes exclusivas y herencia cultural en el corazón de los Andes.</p>
          <div className='content-banner-div-btns'>
            <Btn name={'EXPLORAR DESTINOS'} variant={'btn-red'}/>
            <Btn name={'NUESTROS TOURS'} variant={'btn-outline'}/>
          </div>
        </section>
      </div>
      <section className='content-middle'>
        <span className='content-middle-'></span>
        <h2 className='content-middle-h2'>Destinos Destacados</h2>
        <p className='content-middle-p'>Seleccionamos cuidadosamente los lugares más emblematicos para brindarte una experiencia auténtica y lujosa.</p>
        <div className='content-middle-articles'>
          <CardSite
            lugar={'cusco'} 
            subtitulo={'sierra centro'}
            descripcion={'La capital historica del imperio inca. Un encuestro entre historia, lujo, ...'}
            imagen={img1}
          />
          <CardSite
            lugar={'lima'}
            subtitulo={'costa pasifica'}
            descripcion={`Capital gastronica del mundo Disfruta de la mejor cosina y ...`}
            imagen={img2}/>
          <CardSite 
            lugar={'arequipa'}
            subtitulo={'sierra sur'}
            descripcion={'La ciudad blanca a los pies del volcan Misti. Elegancia colonial y paisajes ...'}
            imagen={img3}/>
        </div>
      </section>
      <section className='content-botton'>
        <div className='content-botton-info-left'>
          <strong className='content-botton-strong'>SERVICIOS PREMIUM</strong>
          <h4 className='content-botton-h4'>Experiencias de Lujo Personalizadas</h4>
          <p className='content-botton-p'>Diseñamos cada viaje pensando en el viajero más exigente. Desde vuelos privados hasta cenas exclusivas en sitios históricos.</p>
          <Btn name={'Más información ->'} variant={'btn-blue'}/>
        </div>
        <div className='content-botton-grid'>
          <CardInfo 
            icon={icon3}
            title='Tours Personalizados'
            description='Itinerarios a medida diseñados por especialistas locales para cumplir sus deseos exactos.'
          />
          <CardInfo 
            icon={icon1}
            title='Estadías de lujo'
            description='Acceso exclusivo a los mejores hoteles boutique, resorts de clase mundial y haciendas historicas.'
          />
          <CardInfo 
            icon={icon4}
            title='Guias Expertos'
            description='Acompañamiento de historiadores y arqueólogos certificadores para una comprension profunda.'
          />
          <CardInfo 
            icon={icon2}
            title='Alta Gastronomia'
            description='Degustaciones privadas y reservas prioritarias en los restaurantes galardonados de Lima.'
          />
        </div>
      </section>
    </>
  )
}