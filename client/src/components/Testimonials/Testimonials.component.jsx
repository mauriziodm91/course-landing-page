import { reviews } from '../../assets/reviews'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section id='testimonials' className='dark-gray'>
      <div className='wrapper'>
        <h2>What our students say?</h2>

        <div className='content-container'>
          {reviews.map(({ reviewer, company, review, image }, id) => (
            <div key={id} className='testimonial'>
              <img src={image} alt='' />
              <div className='reviewer-details'>
                <div className='name'>{reviewer}</div>
                <div className='company-name'>{company}</div>
                <div className='review'>{review}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
