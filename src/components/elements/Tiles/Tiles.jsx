import React from 'react'
import './Tiles.css'

const Tiles = ({title, text, variant = "default", titleVariant ="default", textVariant = "default" }) => {

  return (
    <div>
        <div className={`tile tile-${variant}`}>
          <div className={`tile-title tile-title-${titleVariant}`}>
              <h5>{title}</h5>
          </div>
          <div className={`tile-text tile-text-${textVariant}`}>
              <span>{text}</span>
          </div>
        </div> 
    </div>
  )
}

export default Tiles