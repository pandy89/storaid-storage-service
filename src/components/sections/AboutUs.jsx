import React from 'react'

import Tiles from '@elements/Tiles'
import Button from '@elements/Button'
import KeyValues from '../elements/KeyValues'
import SectionTextBlock from '../elements/SectionTextBlock'
import IconInfoBlock from '../elements/IconInfoBlock'

const AboutUsSection = () => {
  return (
     <section id="about-us-section">
        <div className="container">
            <div className="about-us-area">
                <div className="about-us-content">
                    <div className="keyvalues">
                        <KeyValues />
                    </div>
                    <div className="section-text-block">
                        <SectionTextBlock subheadline="About us" headline="Providing a Safe Space for Your Treasured Items" introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida." /> 
                    </div>
                    <div className="tiles">
                        <Tiles title="Vision" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium." variant="primary" titleVariant="primary" textVariant="primary"/>
                        <Tiles title="Mission" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium." variant="primary" titleVariant="primary" textVariant="primary" />
                    </div>
                    <div className="about-us-button">
                        <Button name="Discover More" aria-label="Discover more about us." />
                    </div>
                    <div className="icon-info-block">
                        <IconInfoBlock title="More Information" text="+46 123 122 44" variant="secondary" icon="phone-2"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsSection