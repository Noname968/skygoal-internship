import React from 'react'
import './Product.css'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'


function Product() {
  return (
    <div className='product'>
      <p className="prtitle">Product and Service</p>
      <div className="prcon">
        <div className="p1">
            <img src={p1} alt="" className='pimg' />
            <p className='protitle'>Our Product</p>
            <p className="contp">Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
            <button className="pread">Read More</button>
        </div>
        <div className="bl"></div>
        <div className="p1">
            <img src={p2} alt="" className='pimg' />
            <p className='protitle'>Our Service</p>
            <p className="contp">DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
            <button className="pread">Read More</button>
        </div>
        <div className="bl"></div>
        <div className="p1">
            <img src={p3} alt="" className='pimg' />
            <p className='protitle'>Our Technology</p>
            <p className="contp">First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices. </p>
            <button className="pread">Read More</button>
        </div>
        <div className="bl"></div>
      </div>
    </div>
  )
}

export default Product
