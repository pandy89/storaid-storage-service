import IconInfoBlock from "../elements/IconInfoBlock"
import SectionTextBlockFull from "../elements/SectionTextBlockFull"
import whyUsImage from '/image-3.png'

const WhyUs = () => {
  return (
    <>
    <section className="why-choose-us">
        <div className="container">
            <div className="why-us-area">
                <SectionTextBlockFull headline="Choose Us for Exeptional Storage Solutions" subheadline="Why Choose Us" introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida." />
                <div className="why-us-content">
                    <div className="why-us-list">
                        <IconInfoBlock title="Security and Safety" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." variant="primary" icon="padlock" />
                        <IconInfoBlock title="Flexible and Affordable" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." variant="primary" icon="money" />
                        <IconInfoBlock title="Clean and Well-Maintained Facilities" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." variant="primary" icon="clean" />
                        <IconInfoBlock title="24/7 and Convenient Access" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." variant="primary" icon="clock" />
                    </div>
                    <div className="why-us-placeholder"><img src={whyUsImage} alt="green storagedoor with lock" /></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhyUs