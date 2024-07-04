import React from 'react'
import "./Header.css"
import Rasm_1 from "../images/rasm_1.webp"
import Rasm_6 from "../images/rasm_6.jpg"
const Header = () => {
  return (
    <div className='header'>
      <div className='container header__container'>
        <img className='header-logo' src={Rasm_1} alt="" />
        <ul className='header__list'>
          <img className='burger' src={Rasm_6} alt="" />
            <li className='header__item'><a className='header__link' href="#">HOME</a></li>
            <li className='header__item'><a className='header__link' href="#">ABOUT LIMSA</a></li>
            <li className='header__item'><a className='header__link' href="#">LIMSA MEMBERS</a></li>
            <li className='header__item'><a className='header__link' href="#">ALL ABOUT MOVING</a></li>
            <li className='header__item'><a className='header__link' href="#">NEWS $ EVENTS</a></li>
            <li className='header__item'><a className='header__link' href="#">CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
