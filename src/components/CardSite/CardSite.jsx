import './CardSite.css'

export function CardSite({lugar,descripcion,subtitulo,imagen}){
  const img = {
    backgroundImage:`url(${imagen})`,
    backgroundSize:`cover`,
    backgroundPosition:`center`,
  }
  return (
    <>
      <article 
        className='content-card'
        style={img}
      >
        <strong className='content-card-strong'>{subtitulo}</strong>
        <h4 className='content-card-h4'>{lugar}</h4>
        <p className='content-card-p'>{descripcion}</p>
        <a className='content-card-a' href="">VER DETALLES {'>'}</a>
      </article>
    </>
  )
}