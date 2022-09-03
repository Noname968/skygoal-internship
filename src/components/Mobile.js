import React from 'react'
import './Mobile.css'
import curve from '../images/curve.png'
import m1 from '../images/m1.png'
import m2 from '../images/m2.png'
import m3 from '../images/m3.png'
import m4 from '../images/m4.png'
import s from '../images/s.png'

function Mobile() {
    return (
        <div className='mobile'>
            <div className="titimg">
                <p className="mtitle">Mobile Specialist</p>
                <img src={curve} alt="" className='curve' />
            </div>
            <div className="mcon">
                <div className="card">
                    <img src={m1} alt=""  className='mimg'/>
                    <p className='mtit'>System Analyst</p>
                    <p className="mtit2">Rodney Stratton</p>
                    <a href="/"><img src={s} alt="" className='simg' /></a>
                </div>
                <div className="card">
                    <img src={m2} alt=""  className='mimg'/>
                    <p className='mtit'>System Analyst</p>
                    <p className="mtit2">Rodney Stratton</p>
                    <a href="/"><img src={s} alt="" className='simg' /></a>
                </div>
                <div className="card">
                    <img src={m3} alt=""  className='mimg'/>
                    <p className='mtit'>Programmer</p>
                    <p className="mtit2">Rodney Stratton</p>
                    <a href="/"><img src={s} alt="" className='simg' /></a>
                </div>
                <div className="card">
                    <img src={m4} alt=""  className='mimg'/>
                    <p className='mtit'>Programmer</p>
                    <p className="mtit2">Rodney Stratton</p>
                    <a href="/"><img src={s} alt="" className='simg' /></a>
                </div>
            </div>
        </div>
    )
}
export default Mobile
