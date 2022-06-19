import React from 'react'
import './Four.css'

function SectionFour() {
  return (
    <div className='bgFour'>
    <div className='titelsFour'>
      <h1>מרגישה שזה מה שאת צריכה?</h1>
      <h1>בואי נדבר!</h1>
    </div>
    <div className='inputsFour'>
      <input placeholder='שם פרטי'/>
      <input placeholder='מייל'/>
      <input placeholder='נייד'/>
      <button className='btnFour'>שליחת פרטים</button>
    </div>

    </div>
  )
}

export default SectionFour