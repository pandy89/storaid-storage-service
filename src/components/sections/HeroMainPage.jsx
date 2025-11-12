import Button from '@elements/Button'
import firstSilhouette from '/silhouette-1.png'

export const HeroMainPage = ({title, subtitle, text}) => {
  return (
    <>
    <section id="hero" className="mainhero-area">        
        <div className="container">
            <div className="mainhero-content">
                <h1 className="mainhero-headline">{title}</h1>
                <h4 className="mainhero-subheadline">{subtitle}</h4>                    
                <span className="mainhero-ingress">{text}</span>
                <div className="mainhero-button"><Button name="Discover more" to="/booking" aria-label="Button to book a storeage."/></div>
                <div className="mainhero-image"><img src={firstSilhouette} alt="Silhouette illustration representing organized storagepersonal" /></div>
            </div>
        </div>
    </section>
    </>    
  )
}

export default HeroMainPage