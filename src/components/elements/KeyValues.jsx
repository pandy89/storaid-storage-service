import React from 'react'
import KeyValuesItem from './KeyValuesItem'

const KeyValues = () => {
  return (
    <>
      <div className="keyvalues-area"></div>
      <div className="keyvalues-box">
          <KeyValuesItem title="12+" text="Years of Experience" />
          <KeyValuesItem title="150+" text="Satisfied Clients" />
          <KeyValuesItem title="35+" text="Warehouse" />
      </div>
    </>
  )
}

export default KeyValues