import React from 'react'
import "./Wrapper.css"
const Wrapper = () => {
  return (
    <div className='wrapper'>
      <div className='container wrapper-container'>
        <ul className='wrapper-list-a'>
        <h1 className='wrapper-title'>Our Members</h1>
        <p className='wrapper-text'>Whether you are from Nassau, Suffolk, Queens or Brooklyn, our members’ sole focus is to deliver moving services that are fair, honest, reliable and focused on your complete satisfaction.</p>
        </ul>
        <ul className='wrapper-list'>
            <button className='wrapper-btn'>NASSAU COUNTY</button>
            <button className='wrapper-btn'>SUFFOLK COUNTY</button>
            <button className='wrapper-btn'>QUEENS & BROOKLYN</button>
        </ul>
      </div>
    </div>
  )
}

export default Wrapper
