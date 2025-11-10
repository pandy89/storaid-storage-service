import Tiles from '@elements/Tiles'
import SectionTextBlockFull from '../elements/SectionTextBlockFull'

const OurServices = () => {
  return (
    <section id="our-services-area">
        <div className="container"> 
            <SectionTextBlockFull headline="Specialized Storage for Every Special Item" subheadline="Our Services" introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."/>
            <div className="our-service-info-box">
                <Tiles title="Diverse Unit Sizes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." className="tile-1" variant="secondary" titleVariant="secondary" textVariant="secondary"/>
                <Tiles title="Vehicle Storage" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." className="tile-2" variant="secondary" titleVariant="secondary" textVariant="secondary"/>
                <div className="placeholder-box"></div>
                <Tiles title="Moving Assistance" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." className="tile-3" variant="secondary" titleVariant="secondary" textVariant="secondary"/>
                <Tiles title="Top-Notch Security" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." className="tile-4" variant="secondary" titleVariant="secondary" textVariant="secondary"/>
            </div>
        </div>
    </section>        
  )
}

export default OurServices