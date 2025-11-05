import React from 'react'

import PriceList from '@elements/PriceList'

const PricePlan = () => {
  return (
    <section id="price-plan-area">
      <div className="container">
        <h4 className="price-plan-subheadline">Pricing Plan</h4>
        <div className="price-plan-headline"><h3>Find the Perfect Plan for Your Storage Needs</h3></div>
        <div className="pricelist">
          <PriceList header="Small Unit" price="50" />
          <PriceList header="Medium Unit" price="100"  />
          <PriceList header="Large Unit" price="150"  />
          <PriceList header="Executive Unit" price="200" />
        </div>
      </div>
    </section>
  )
}

export default PricePlan