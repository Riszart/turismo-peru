import { Link } from 'react-router-dom'
import './Btn.css'

export function Btn({name, variant}){
  return (
    <>
      <button className={`btn ${variant}`} >{name}</button>
    </>
  )
}
export function BtnLink({name, variant}){
  return (
    <>
      <Link to='/Contact' className={`btn ${variant}`} >{name}</Link>
    </>
  )
}