import React from 'react'
import "./Hover.css"
const Hover = () => {
  return (
    <div className='hover'>
      <div className='container hover__container'>
        <ul className='hover__list'>
            <li className='hover-item-a'>
                <h1 className='hover-title'>Find a Mover You Can Trust</h1>
                <p className='hover-text'>These important tips can help protect you and your belongings when you move.</p>
                <button className='hover-btn'>LEARN MORE</button>
            </li>
            <li className='hover-item-b'>
                <h1 className='hover-title'>How to Avoid Moving Scams</h1>
                <p className='hover-text'>Here are the signs to look for that may help you spot a moving scam or rogue mover.</p>
                <button className='hover-btn'>LEARN MORE</button>
            </li>
            <li className='hover-item-c'>
                <h1 className='hover-title'>Important Questions to Ask</h1>
                <p className='hover-text'>To find the best moving company for your family ask these important questions.</p>
                <button className='hover-btn'>LEARN MORE</button>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Hover
