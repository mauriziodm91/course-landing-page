import { socials } from '../../assets/socials'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='black'>
      <div className='wrapper'>
        <div className='content-container'>
          <div className='links'>
            <a href='#' className='logo'>
              Sound<span className='red'>DZing</span>
            </a>

            <div className='social-icons'>
              {socials.map((social, id) => (
                <a href='#' key={id}>
                  <img src={social.logo} alt='' />
                </a>
              ))}
            </div>

            <div className='copyright'>
              {`This website is designed by MDM Ⓒ ${new Date().getFullYear()}`}
            </div>
          </div>

          <div className='links'>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className='links'>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href='#'>contact@email.com</a>
              </li>
              <li>
                <a href='#'>+1 999 9999 999</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
