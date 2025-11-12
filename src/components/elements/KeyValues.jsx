import KeyValuesItem from './KeyValuesItem'
import aboutUsImage from '/image-1.png'

const KeyValues = () => {
  return (
    <>
      <div className="keyvalues-area"><img src={aboutUsImage} alt="woman and man working in storage with boxes." /></div>
      <div className="keyvalues-box">
          <KeyValuesItem title="12+" text="Years of Experience" />
          <KeyValuesItem title="150+" text="Satisfied Clients" />
          <KeyValuesItem title="35+" text="Warehouse" />
      </div>
    </>
  )
}

export default KeyValues