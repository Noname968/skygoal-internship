import React from 'react'
import './Contact.css'
import i1 from '../images/image 7.png'
import i2 from '../images/image 9.png'
import i3 from '../images/image 10.png'
import i4 from '../images/image 11.png'
import i5 from '../images/image 13.png'
import i6 from '../images/image 14.png'


function Contact() {
  return (
    <>
    <div className='contact'>
      <div className="conleft">
        <p className="ltit">PT Dwidasa Samsara Indonesia</p>
        <p className="lsub">Ruko Jalur Sutera 29A No. 53 <br></br>
Alam Sutera Serpong, Tangerang 15323</p>
      </div>
      <div className="conmid">
        <p className="contactinfo">Contact</p>
        <p className="phone">Phone : +62.21.5314.1135</p>
        <p className="fax">Fax : +62.21.5314.1135</p>
        <p className="email">Email : community@dwidasa.com</p>
      </div>
      <div className="conright">
        <div className="coni1">
        <img src={i1} alt="" className='conimg s'/>
        <img src={i2} alt="" className='conimg'/>
        <img src={i3} alt="" className='conimg'/>
        </div>
       <div className="coni2">
       <img src={i4} alt="" className='conimg'/>
        <img src={i6} alt="" className='conimg a'/>
        <img src={i5} alt="" className='conimg'/>
       </div>
      </div>
    </div>
      <div className="copy">Copyright © 2015</div>
    </>
  )
}

export default Contact
