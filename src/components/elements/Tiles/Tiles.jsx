import React from 'react'
import './Tiles.css'

const Tiles = ({title, text, variant = "default" }) => {

  return (
    <div>
        <div className={`tile tile-${variant}`}>
          <div className="tiles-title">
              <h5>{title}</h5>
          </div>
          <div className="tiles-text">
              <span>{text}</span>
          </div>                
        </div> 
    </div>
  )
}

export default Tiles