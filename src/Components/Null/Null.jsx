import React from 'react'
import "./Null.css"
import Rasm_4 from "../images/rasm_4.webp"
const Null = () => {
  return (
    <div className='null'>
      <div className='container null-container'>
        <ul className='null-list'>
                <img className='null-img' src={Rasm_4} alt="" />
            <li className='null-item'>
                <h1 className='null-title'>About LIMSA</h1>
                <p className='null-text'>LIMSA (Long Island Moving and Storage Association) is an association of licensed professional Long Island movers who adhere to LIMSA’s strict Code of Ethics which promises you honest treatment at fair prices. A recent study shows that LIMSA members made more than 51,000 moves a year.</p>
                <button className='null-btn'>TRUST OUR MEMBERS</button>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Null
