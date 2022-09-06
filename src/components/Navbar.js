import React,{useState} from 'react'
import './Navbar.css'
import house from '../images/house.png'
import alter from '../images/alter.png'
import mail from '../images/mail.png'
import ham from '../images/ham.png'

function Navbar() {
  const [show,setshow] = useState(false)

  return (
    <nav className='navbar'>
      <div className='hamico' onClick={()=>setshow(!show)}>
        <img src={ham} alt="" className='hamim' />
      </div>
      <div className={show ? "conmobil" : "con"}>
        <a href="/"  className='atag'>Services</a>
        <a href="/" className='atag'>Product</a>
        <a href="/" className='atag'>Technology</a>
        <select name="about" id="" className='sel'>
          <option value="123">About</option>
        </select>
        <select name="client" id="" className='sel'>
          <option value="234">Client</option>
        </select>
        <a href="/" className='atag'>Partner</a>
      </div>
      <div className="navright">
        <a href="/"><img src={house} alt="" className='navimg'/></a>
        <a href="/"><img src={mail} alt="" className='navimg'/></a>
        <a href="/"><img src={alter} alt="" className='navimg'/></a>
      </div>
    </nav>
  )
}

export default Navbar