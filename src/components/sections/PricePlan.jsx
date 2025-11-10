import PriceList from '@elements/PriceList'
import SectionTextBlock from '../elements/SectionTextBlock'

const PricePlan = () => {
  return (
    <section id="price-plan-area">
      <div className="container">
        <SectionTextBlock headline="Find the Perfect Plan for Your Storage Needs" subheadline="Pricing Plan" />
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