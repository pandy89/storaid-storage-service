import React from 'react'
import './OurServices.css'
import Tiles from '@elements/Tiles/Tiles'

const OurServices = () => {
  return (
    <div>
        <div className="container">
            <div className="our-services-area">
                <h4 className="subheadline">Our Services</h4>
                <div className="our-service-box">
                    <h5 className="headline">Specialized Storage for Every Special Item</h5>
                    <span className="our-service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</span>
                </div>
                <div className="our-service-content">
                    <Tiles title="Diverse Unit Sizes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus," className="tile-1"/>
                    <Tiles title="Moving Assistance" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus," className="tile-2"/>
                    <div class="placeholder-box"></div>
                    <Tiles title="Vehicle Storage" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus," className="tile-3"/>
                    <Tiles title="Top-Notch Security" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus," className="tile-4"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices