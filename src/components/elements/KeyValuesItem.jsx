import React from 'react'

const KeyValuesItem = ({title, text}) => {
  return (
    <div className="keyvalues-item">
      <h2 className="keyvalues-headline">{title}</h2>
      <span className="keyvalues-text">{text}</span>
    </div>
  )
}

export default KeyValuesItem