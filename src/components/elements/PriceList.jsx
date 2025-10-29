import React from 'react'
import Button from '@elements/Button'

const PriceList = () => {
  return (
    <>
        <div className="pricelist-card">
            <span className="pricelist-header"><h5>Small Unit</h5></span>
            <img className="dollarsign" src="/icons/dollarsign.svg" alt="Dollar sign icon" />        
            <div className="pricelist-price">            
                <span className="price">50</span>
                <span className="month">/month</span>
            </div>
            <div className="pricelist-text">
                <span>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</span>
            </div>            
            <div className="divider"></div>
            <div className="checklist-list">
                <ul className="checklist">
                    <li className="checklist-item"><i className="bi bi-check-circle-fill list-icon"></i>Nam nec ipsum in dolor</li>
                    <li className="checklist-item"><i className="bi bi-check-circle-fill list-icon"></i>Fusce nec ligula ut arcu</li>
                    <li className="checklist-item"><i className="bi bi-check-circle-fill list-icon"></i>Aliquam pulvinar arcu in</li>
                    <li className="checklist-item"><i className="bi bi-check-circle-fill list-icon"></i>Duis gravida enim porta</li>
                    <li className="checklist-item"><i className="bi bi-check-circle-fill list-icon"></i>Etiam eget libero non ligula</li>
                </ul>
            </div>
            <div className="pricelist-button">
                <Button name="Rent now" aria-label="Rent priceplan to 50$ per month" />
            </div>
        </div>
    </>
  )
}

export default PriceList