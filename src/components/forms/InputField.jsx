import React from 'react'
import './InputField.css'

const InputField = () => {
  return (
    <>
    <div className="input-field-container">
        <label className="input-label">Sampelinput</label>
        <input type="text" className="input-field" placeholder="Enter you text here" />
    </div>
    </>
  )
}

export default InputField