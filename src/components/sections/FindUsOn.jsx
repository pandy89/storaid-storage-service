import React from 'react'
import IconInfoBlock from '../elements/IconInfoBlock'
import { Link } from 'react-router-dom'

const FindUsOn = () => {
  return (
    <section id="find-us-on-area">
        <div className="container">
            <div className="find-us-on-content">
                <div className="find-us-image"><img src="/silhouette-2.svg" alt="Silhouette illustration representing organized storagepersonal" /></div>
                <div className="find-us-on-box">
                    <div className="find-us-info-box">
                        <h3 className="find-us-title">Find Us On:</h3>
                        <span className="find-us-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
                        <div className="iconboxes">
                            <IconInfoBlock title="Call Center" text="+46 123 122 44" variant="secondary" icon="phone-2"/>
                            <IconInfoBlock title="Email Adress" text="contact@domain.com" variant="secondary" icon="email-2" email="contact@domain.com" isEmailLink={true}/>
                            <IconInfoBlock title="Location" text="Klarabergsviadukten 90, Stockholm" variant="secondary" icon="location"/>
                        </div>
                        <div className="follow-us-box">
                            <h5>Our Social Media</h5>
                            <div className="line"></div>
                            <div className="find-us-social-media-icons">
                                <Link to="/"><img src="icons/facebook.svg" alt="Facebook icon" /></Link>
                                <Link to="/"><img src="icons/x.svg" alt="X icon" /></Link>
                                <Link to="/"><img src="icons/instagram.svg" alt="Instagram icon" /></Link>
                                <Link to="/"><img src="icons/youtube.svg" alt="LinkedIn icon" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default FindUsOn