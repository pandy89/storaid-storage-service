const Tiles = ({title, text, variant = "default", titleVariant ="default", textVariant = "default" }) => {

  return (
    <div className={`tile tile-${variant}`}>
      <div className={`tile-title tile-title-${titleVariant}`}><h5 className="tilestitle">{title}</h5></div>
      <div className={`tile-text tile-text-${textVariant}`}><span>{text}</span></div>
    </div>
  )
}

export default Tiles