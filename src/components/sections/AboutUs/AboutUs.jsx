import React from 'react'
import './AboutUs.css'
import 'C:/projects/storaid-storage-service/src/index.css'

import Tiles from '@elements/Tiles/Tiles'
import Button from '@elements/Button/Button'
import KeyValues from '../../elements/KeyValues/KeyValues'

const AboutUs = () => {
  return (
    <div>
        <div className="container">
            <div className="about-us-area">
                <div className="about-us-content">
                    <div className="keyvalues"><KeyValues/></div>                    
                    <h4 className="subheadline">About us</h4>
                    <h3 className="headline">Providing a Safe Space for Your Treasured Items</h3>
                    <span className="about-us-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</span>
                    <div className="tiles">
                        <Tiles title="Vision" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."/>
                        <Tiles title="Mission" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium." />
                    </div>
                    <div className="discover"><Button name="Discover more" /></div>
                    <div className="more-info">
                        <div className="info-icon"><img src="icons/phone-2.svg" /></div>
                        <div className="info-text">
                            <span><h5>More information</h5></span>
                            <span><h6>+46 8 123 122 44</h6></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs