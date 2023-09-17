import React from 'react'
import './card.css'

const card = ({ mentorTitle, mentorDesctiption, endLine, image, color, padding}) => {
  return (
    <div className='card'>
        <div className={`card-container`} style={{ padding }}>
            <img className={`image-container`} src={image}/>
        </div>
        <div className={`mentor-container`}>
            <p className={`mentor-title`} style={{ color }}>{mentorTitle}</p>
            <div className={`expert-mentor-description1`} style={{ color }}>
            {mentorDesctiption}
              <p className={`font-size-16-line-height-102`} style={{ color }}>{endLine}</p>
            </div>
        </div>
    </div>
  )
}

export default card