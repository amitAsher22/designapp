import React from 'react'
import './sectionone.css'

function SectionOne() {
  return (
    <div>
      <div className='imgBg'>
          <h1 className='titleSectionOne'>Amit</h1>
          <div>
            <h1 className='title2sectionOne'>מייעוץ לשיפוץ</h1> 
          <h2 className='otherTitleSectionOne'><strong>פגישת ייעוץ ותכנון לעיצוב הבית </strong></h2> 
            <h2 className='otherTitleSectionOne'><strong>שבה אלמד אותך את כל מה שצריך כדי להפוך את הבית שלך, </strong></h2>
            <h2 className='otherTitleSectionOne'><strong>לבית שעושה חשק לחזור אליו :) </strong></h2>
          </div>
          <div className='textSpanDivSectionOne'>
            <span className='span1'><strong>את חולמת על בית נעים ונוח,</strong></span>
            <span className='span2'>כזה שאת מגיעה אליו ואת מרגישה שאת נרגעת</span>
            <span className='span1'><strong>שעושה לך חשק לחזור אליו בסוף היום..</strong></span>
          </div>
          <div className='textSpanDivSectionOne'>
            <span className='span1'>כזה שבא לך לארח בו ולהזמין חברים</span>
            <span className='span2'>שלכל דבר יש את המקום שלו,</span>
            <span className='span1'>ולמרות שזה בית עם חיים,</span>
            <span className='span1'> הוא <strong>מאורגן ומסודר...</strong></span>
          </div>
          <div className='textSpanDivSectionOne'>
            <span className='span1'>בית כזה עם אופי,</span>
            <span className='span1'><strong>שמספר את הסיפור שלכם,</strong></span>
            <span className='span1'>אבל בלי יותר מידי קשקושים או דברים שצריך לנקות...</span>
   
          </div>
      </div>
    </div>
  )
}

export default SectionOne