import { info } from '../../assets/info'
import bgElement2 from '../../assets/bgElement2.svg'

import './Info.css'

const Info = () => {
  return (
    <section id='info' className='dark-gray'>
      <div className='wrapper'>
        <div className='content-container'>
          {info.map(({ amount, type, icon }, id) => (
            <div className='info-content' key={id}>
              <img src={icon} />
              <div className='amount'>{amount}</div>
              <div className='type'>{type}</div>
            </div>
          ))}
        </div>
        <img className='bg-element-2' src={bgElement2} alt='' />
      </div>
    </section>
  )
}

export default Info
