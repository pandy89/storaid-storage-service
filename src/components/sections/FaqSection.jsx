import Faq from '@elements/Faq'
import SectionTextBlock from '../elements/SectionTextBlock'

const FaqSection = () => {
  return (
    <>
    <section className="faq-section">
        <div className="container">
          <div className="faq-area">
            <div className="faq-content">
              <SectionTextBlock headline="Frequently Ask Questions" subheadline="FAQs" introtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
            </div>        
            <div className="faq-accordion">
                <Faq />
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default FaqSection