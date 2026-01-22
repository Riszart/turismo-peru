import {Btn} from '../components/Button/Btn'
import locationIcon from '../assets/icons/location_on_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import mailIcon from '../assets/icons/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import mensajeIcon from '../assets/icons/comment_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'

import './Contact.css'

export function Contact(){
  return (
    <div className='container-main'>
      <section className='width-1200'>
        <section className='main-contact-top'>
          <h2 className='main-contact-top-h2'>Diseñemos tu viaje <span>soñado</span> por el Perú</h2>
          <p className='main-contact-top-p'>Nuestro equipo de expertos en lujop y cultura esta listo para asistirte en cada paso de tu proxima gran aventura</p>
        </section>
        <section className='main-contact-bottom'>
          <div>
            <form className='form-contact' action="">
                <div className='form-contact-content-seccion'>
                  <section className='form-contact-colum2'>
                    <label className='form-contact-label' htmlFor="">nombre completo</label>
                    <input className='form-contact-input' type="text" placeholder='Ej. Riszart Daryl'/>
                  </section>
                  <section>
                    <label className='form-contact-label' htmlFor="">correo electornico</label>
                    <input className='form-contact-input' type="text" placeholder='riszart@ejemplo.com'/>
                  </section>
                </div>
                <div className='form-contact-content-seccion'>
                  <section>
                    <label className='form-contact-label' htmlFor="">telefono</label>
                    <input className='form-contact-input' type="text" placeholder='+51 987 654 321'/>
                  </section>
                  <section>
                    <label className='form-contact-label' htmlFor="">destino de interes</label>
                    <input className='form-contact-input' type="text" placeholder='Machu Picchu'/>                    
                  </section>
                </div>
                <div className=''>
                  <label className='form-contact-label' htmlFor="">¿como podemos ayudarte?</label>
                  <textarea className='form-contact-text' name="" id="" placeholder='Cuéntanos más sobre el viaje que imaginas...'></textarea>
                </div>
                <div className=''>
                  <Btn name={'enviar solicitud'} variant={'form'}/>
                </div>
            </form>
            <div className='content-card-section'>
              <article>
                <img className='card-image' src={mensajeIcon} alt="" />
                <h3 className='card-h3'>WhatsApp</h3>
                <span className='card-span'>+51 987 654 321</span>
              </article>
              <article>
                <img className='card-image' src={mailIcon} alt="" />
                <h3 className='card-h3'>Email</h3>
                <span className='card-span'>hola@turisperu.pe</span>
              </article>
              <article>
                <img className='card-image' src={locationIcon} alt="" />
                <h3 className='card-h3'>Oficina</h3>
                <span className='card-span'>Miraflores, Lima</span>
              </article>
            </div>
          </div>
          <section className='content-right-section'>
            <div className='content-right-image'></div>
            <div className='content-right-text'>
              <h5>Compromiso con la Excelencia</h5>
              <p>Más que una agencia, somos curadores de historias. Cada itinerario es diseñado artesanalmente para deflejar la riqueza cultural de nuestro país.</p>
              <div className='content-right-colapse'>
                <p>+12 Expertos locales a tu servicio</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  )
}