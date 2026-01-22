import './CardInfo.css'

export function CardInfo({icon,title,description,variant}){
  return (
    <>
      <article className={`card-info-content ${variant}`}> 
        <div className={`card-info-content-icon`}>
          <img className="card-info-icon" src={icon} />
        </div>
        <h3 className="card-info-title">{title}</h3>
        <p className="card-info-description">{description}</p>
      </article>
    </>
  )
}
