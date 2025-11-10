import brandlogoOne from '/logoipsum-1.svg'
import brandlogoTwo from '/logoipsum-2.svg'
import brandlogoThree from '/logoipsum-3.svg'
import brandlogoFour from '/logoipsum-4.svg'
import brandlogoFive from '/logoipsum-5.svg'

const Brands = () => {
  return (
    <section id="brand-area">
        <div className="container">
            <div className="brand-content">
                <img src={brandlogoOne} alt="Brandlogo-1" />
                <img src={brandlogoTwo} alt="Brandlogo-2" />
                <img src={brandlogoThree} alt="Brandlogo-3" />
                <img src={brandlogoFour} alt="Brandlogo-4" />
                <img src={brandlogoFive} alt="Brandlogo-5" />
            </div>
        </div>
    </section>
  )
}

export default Brands