import React from 'react'
import "./Number.css"
import Rasm_5 from "../images/rasm_5.webp"
const Number = () => {
  return (
    <div className='number'>
      <div className='container number-container'>
        <ul className='number-list'>
            <img src={Rasm_5} alt="" />
            <br />
            <a className='number-link' href="">© 2024 Long Island Moving & Storage Association</a>
            <p className='number-text'>Read our Privacy Policy</p>
        </ul>
        <ul className='number-list'>
            <h1 className='number-title'>Have a Question? Get in Touch</h1>
            <input className='number-input' type="imail" placeholder='   Name' />
            <br />
            <input className='number-input' type="imail" placeholder='   @sirojidinovich' />
            <br />
            <input className='number-input' type="imail" placeholder='   Message' />
            <br />
            <button className='number-btn'>SUMBIT</button>
        </ul>
      </div>
    </div>
  )
}

export default Number
