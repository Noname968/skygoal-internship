import React from 'react'
import './Next.css'
import pana1 from '../images/pana-1.svg'

function Next() {
  return (
    <div className='next'>
      <div className="conn">
      <div className="nleft">
        <img src={pana1} alt="" className='pana1'/>
      </div>
      <div className="nright">
        <p className="titl">Welcome to <span> Dwidasa Samsara Indonesia (DSI)</span></p>
        <div className="contitle">
        <p className="cont1">Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span> DSI</span>’s distinct front-end based application concept.</p>
        <p className="cont2">Managed by a team of professional experts with extensive experience and impressive track records, <span> DSI </span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Next
