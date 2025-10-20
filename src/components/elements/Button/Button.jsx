import React from 'react'
import './Button.css'

const Button = ({name}) => {
  return (
    <div className='btn'>{name}</div>
  )
}

export default Button