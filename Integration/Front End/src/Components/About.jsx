import './About.css'
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; 

import logoo from '../pics/logoo.png'
const About = () => {
  return (
    <div className="home-container">
    <header>
      <div className="logo">
        <img src={logoo}></img>
      </div>
      <nav>
        <div className='home-book'> 
        <div className="dropdown">
            <button id="menuButton" className="dropbtn">Menu</button>
            <div className="dropdown-content">
                <a href="http://localhost:5173/home">Home</a>
            <a href=" http://localhost:5173/work">Workshops&Events</a>
                <a href="http://localhost:5173/price">Price</a>
                <a href="http://localhost:5173/contact">Contact</a>
                <a href="http://localhost:5173/about">LogIn</a>
            </div>
          </div>
         </div>
      </nav>
    </header>
    <div className="a-intro">
      <h1>About us</h1>
    </div>
    <p></p>
    <br></br>
    <div className="a-about">
        <p></p>
    
    <h2><strong>AstralZen, the embodiment of serenity and self-discovery, invites users to embark on a profound yoga journey 
      that transcends the physical realm. This thoughtfully crafted application seamlessly blends ancient yogic wisdom with 
      cutting-edge technology to offer a transformative experience for practitioners of all levels. </strong></h2></div>
    <div className="a-about">
        <p></p>
        <h2><strong>Guided by seasoned instructors, users can delve into a diverse library of yoga sessions, ranging from
           foundational postures to advanced practices, fostering a harmonious connection between mind, body, and spirit.
           The application fosters a sense of community, encouraging users to share their experiences, insights, and achievements with like-minded individuals.</strong></h2>
    </div>

    <div className='abt-foot'>
      <footer>
        <p>&copy; 2024 ASTRALZEN. All rights reserved.</p>
      </footer>
      <div className="abt-social-icons">
            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a> <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
            <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
        </div>
      </div>

    </div>
  )
}

export default About
