import React from 'react'

import Tiles from '@elements/Tiles'
import Button from '@elements/Button'
import KeyValues from '../elements/KeyValues'

const AboutUsSection = () => {
  return (
    <section id="about-us-section">
        <div className="container">
            <div className="about-us-area">
                <div className="about-us-content">
                    <div className="keyvalues"><KeyValues/></div>                    
                    <h4 className="about-us-subheadline">About Us</h4>
                    <h3 className="about-us-headline">Providing a Safe Space for Your Treasured Items</h3>
                    <span className="about-us-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</span>
                    <div className="tiles">
                        <Tiles title="Vision" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium." variant="primary" titleVariant="primary" textVariant="primary"/>
                        <Tiles title="Mission" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium." variant="primary" titleVariant="primary" textVariant="primary" />
                    </div>
                    <div className="about-us-button"><Button name="Discover more" aria-label="Discover more about us." /></div>
                    <div className="more-info">
                        <div className="info-icon"><img src="icons/phone-2.svg" alt="Icon for phone" /></div>
                        <div className="info-text">
                            <span><h5>More information</h5></span>
                            <span><h6>+46 8 123 122 44</h6></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsSection