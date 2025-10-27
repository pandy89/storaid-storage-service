import React from 'react'
import './HeroMainPage.css'
import Button from '@elements/Button/Button'

export const HeroMainPage = ({title, subtitle, text}) => {
  return (
    <>
    <section id="hero" className="mainhero-area">        
        <div className="container">
            <div className="mainhero-content">
                <h1 className="mainhero-headline">{title}</h1>
                <h4 className="mainhero-subheadline">{subtitle}</h4>                    
                <span className="mainhero-ingress">{text}</span>
                <div className="mainhero-button"><Button name="Discover more" aria-label="Discover more about StorAid Storage Company" /></div>
                <div className="mainhero-image"><img src="/silhouette-1.svg" alt="Silhouette illustration representing organized storage" /></div>
            </div>
        </div>
    </section>
    </>    
  )
}

export default HeroMainPage