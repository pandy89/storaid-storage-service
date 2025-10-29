import React from 'react'

const HeroSubPage = ({title, text}) => {
  return (
    <section id="subhero">
        <div className="subhero-area">
            <div className="subhero-content">                        
                <h1 className="subhero-headline">{title}</h1>
                <span className="subhero-ingress">{text}</span>
            </div>
        </div>
    </section>
  )
}

export default HeroSubPage