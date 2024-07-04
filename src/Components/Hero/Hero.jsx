import React from 'react'
import "./Hero.css"
import Rasm_2 from "../images/rasm_2.svg"
const Hero = () => {
  return (
    <div className='hero'>
      <div className='container hero__container'>
        <img className='hero__img' src={Rasm_2} alt="" />
        <p className='hero__text'>THE LONG ISLAND MOVING & STORAGE ASSOCIATION</p>
        <h1 className='hero__title'>We’ll Help You Make The Right Move.</h1>
      </div>
    </div>
  )
}

export default Hero
