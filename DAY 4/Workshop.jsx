// import React from 'react'
import './Workshop.css'
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Make sure to import the necessary icons
import logoo from '../pics/logoo.png'
import Cards1 from './Cards1';
import Cards2 from './Cards2';
import Cards3 from './Cards3';
import Cards4 from './Cards4';
import Cards5 from './Cards5';
import Cards6 from './Cards6';
import Cards7 from './Cards7';
import Cards8 from './Cards8';
const Workshop = () => {
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
                <a>Workshops&Events</a>
                <a>Price</a>
                <a>Bookings</a>
                <a>Contact</a>
                <a>About</a>
            </div>
          </div>
         </div>
      </nav>
    </header>
    <div className="work-intro">
      <h1>AstralZen Activate Method</h1>
      <h3>Health Coaching Programs</h3>
    </div>

    <section className="work-hero">
          <h2>Let me introduce you to AstralZen Activate... My signature Health Coaching method.  It is the core of each Health Coaching program.  When choosing a program, you wll always get AstralZen Activate, which is comprised of 6 modules, a workbook, and a journal.</h2>
          <h2>When choosing a program you are simply deciding what level of support you need while going through this process to meet your personal desires and goals. </h2>
          <h2>This method is my signature combination of . . . the clinical application of behavioral change, positive psychology, and motivational interviewing. Infused with... Real-time experience, mindset work to create the structure, and guidance you need to make LASTING changes in your wellness.</h2>
          {/* <a className="btn-primary">FIND A CLASS</a> */}
    </section>

    <div className='home-cards'>
      <Cards1/> <Cards2/> <Cards3/> <Cards4/>
      </div>
      <div className='home-cards'>
      <Cards5/> <Cards6/> <Cards7/> <Cards8/>
      </div>
    <div className='abt-foot'>
      <footer>
        <p>&copy; 2024 ASTRALZEN. All rights reserved.</p>
      </footer>
      <div className="abt-social-icons">
            <a href="https://www.instagram.com/accounts/login/"  rel="noopener noreferrer">
                <FaInstagram size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
            <a href="https://www.facebook.com/login/" rel="noopener noreferrer">
                <FaFacebook size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
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

export default Workshop
