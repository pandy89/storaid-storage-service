import StarRating from './StarRating'
import quotation from '/icons/quotation-marks.svg'

const Testimonial = ({item}) => {
  return (
    <div className="testimonial-card">
        <div className="testimonial-card-item">
            <div className="star-rating"><StarRating starRating={item.rating} /></div>
            <div className="review-text">{item.comment}</div>
            <div className="user-info">
                <img className="user-avatar" src={item.avatarUrl} alt={item.name} />
                <div className="user-name-title">
                    <h6>{item.name}</h6>
                    <span className="user-title">{item.companyName}</span>
                </div>
            </div>
            <div className="testimonial-quots"><img src={quotation} alt="Quatation marks" /></div>
        </div>
    </div>    
  )
}

export default Testimonial