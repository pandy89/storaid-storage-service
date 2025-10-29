import React from 'react'

import PriceList from '@elements/PriceList'

const PricePlan = () => {
  return (
    <section id="price-plan-area">
      <div className="container">
        <h4 className="price-plan-subheadline">Pricing Plan</h4>
        <div className="price-plan-headline"><h3>Find the Perfect Plan for Your Storage Needs</h3></div>
        <div className="pricelist">
          <PriceList />
          <PriceList />
          <PriceList />
          <PriceList />
        </div>
      </div>
    </section>
  )
}

export default PricePlan