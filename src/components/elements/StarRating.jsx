// Använt mig av Hans starrating 
const StarRating = ({starRating}) => {
    const totalStars = 5;
    const filledStars = Math.min(starRating, totalStars);
    const emptyStars = totalStars - filledStars;

  return (
    <div>
        <div className="star-rating">
          {
              [...Array(filledStars)].map((_, index) => (
                  <i key={index} className="bi bi-star-fill stars"></i>))
          }
          {
              [...Array(emptyStars)].map((_, index) => (
                  <i key={index} className="bi bi-star"></i>))
          }          
      </div>
    </div>
  )
}

export default StarRating