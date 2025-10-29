import React from 'react'
import { Link } from 'react-router-dom'

/* Jag har tagit hjälp av ChatGPT för att skapa emailfunktionen */

const IconInfoBlock = ({title, text, variant = "default", icon, email, isEmailLink }) => {
  return (
    <div className="icon-info-block">
        <div className={`icon-info-block-image icon-info-block-image-${variant}`}><img src={`icons/${icon}.svg`} alt={title}  /></div>
        <div className="icon-info-block-textcontent">
            <div className="icon-info-block-title"><h5>{title}</h5></div>
            <div className="icon-info-block-text">{isEmailLink ? (<Link to={`mailto:${email}`} className="contact-link">{email}</Link>) : (<span>{text || email}</span>)}</div>
        </div>
    </div>
  )
}

export default IconInfoBlock