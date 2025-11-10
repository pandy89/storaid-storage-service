import IconInfoBlock from '../elements/IconInfoBlock'
import { Link } from 'react-router-dom'
import facebook from '/icons/facebook.svg'
import x from '/icons/x.svg'
import instagram from '/icons/instagram.svg'
import youtube from '/icons/youtube.svg'
import secondSilhouette from '/silhouette-2.svg'

const FindUsOn = () => {
  return (
    <section id="find-us-on-area">
        <div className="container">
            <div className="find-us-on-content">
                <div className="find-us-image"><img src={secondSilhouette} alt="Silhouette illustration representing organized storagepersonal" /></div>
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
                                <Link to="https://www.facebook.com/"><img src={facebook} alt="Social media icon Facebook icon" /></Link>
                                <Link to="https://x.com/"><img src={x} alt="Social media icon X icon (twitter)" /></Link>
                                <Link to="https://www.instagram.com/"><img src={instagram} alt="Social media icon Instagram icon" /></Link>
                                <Link to="https://www.youtube.com/"><img src={youtube} alt="Social media icon YouTube icon" /></Link>
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