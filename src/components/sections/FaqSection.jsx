import React from 'react'
import Faq from '@elements/Faq'

const FaqSection = () => {
  return (
    <>
    <section className="faq-section">
        <div className="container">
          <div className="faq-area">
            <div className="faq-content">
              <h4 className="faq-headline">FAQs</h4>
              <h3 className="faq-subheadline">Frequently Ask Questions</h3>
              <span className="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
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