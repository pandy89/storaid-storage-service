import React from 'react'
import './PricePlan.css'

import PriceList from '@elements/PriceList/PriceList'

const PricePlan = () => {
  return (
    <>
    <div className="container">
        <section className="price-plan-area">
            <h4>Pricing Plan</h4>
            <div className="headline">
                <h3>Find the Perfect Plan for Your Storage Needs</h3>
            </div>
            <div className="pricelist">
            <PriceList />
            <PriceList />
            <PriceList />
            <PriceList /></div>
        </section>
    </div>
    </>
  )
}

export default PricePlan