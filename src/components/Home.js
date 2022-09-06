import React from 'react'
import './Home.css'
import pana from '../images/pana.svg'

function Home() {
    return (
        <div className='house'>
            <div className="housecon">
                <div className="left">
                    <p className="ptitle">
                        Making the most of the ever-growing 
                        <span> Information Technology</span>
                    </p>
                    <p className="psub">Managed by a team of professional experts with extensive experience and impressive track records</p>
                    <button className="read">Read More</button>
                </div>
                <div className="right">
                    <img src={pana} alt="" className='pana'/>
                </div>
            </div>
        </div>
    )
}


export default Home
