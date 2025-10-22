import React from 'react'
import './Tiles.css'

const Tiles = ({title , text}) => {
  return (
    <div>
        <div className="tiles-card">
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