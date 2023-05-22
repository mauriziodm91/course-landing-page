import { useState, useEffect } from 'react'
import { urlFor, client } from '../../utils/sanityClient'
import './Testimonials.css'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const query = '*[_type == "testimonials"] '
    client.fetch(query).then((data) => {
      setTestimonials(data)
    })
  }, [])

  return (
    <section id='testimonials' className='dark-gray'>
      <div className='wrapper'>
        <h2>What our students say?</h2>

        <div className='content-container'>
          {testimonials.map(({ company, name, image, message }, id) => (
            <div key={id} className='testimonial'>
              <img src={urlFor(image)} alt='' />
              <div className='reviewer-details'>
                <div className='name'>{name}</div>
                <div className='company-name'>{company}</div>
                <div className='review'>{message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
