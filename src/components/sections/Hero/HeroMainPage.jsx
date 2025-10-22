import React from 'react'
import './HeroMainPage.css'
import Button from '@elements/Button/Button'

export const HeroMainPage = () => {
  return (
    <div>
        <section id="hero" className="hero">
            <div className="hero-area">
                <div className="hero-content">
                    <h4 className="welcome">Welcome to StorAid</h4>
                    <h1 className="hero-headline">Space Simplified, Storage Perfected</h1>
                    <span className="hero-ingress">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</span>
                    <div className="hero-button"><Button name="Discover more"/></div>
                    <div className="hero-image">
                        <img src="/silhouette-1.svg" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroMainPage