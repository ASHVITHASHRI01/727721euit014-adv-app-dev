// import React from 'react'
import './About.css'
import { FaInstagram, FaFacebook } from 'react-icons/fa';
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
              <a>Bookings</a>
              <a>Contact</a>
              <a>Blog</a>
              <a>About</a>
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
    
    <h2><strong>Welcome to our Home Garden Application, where we help you unlock the beauty 
        and potential of your green spaces. At Home Garden, we are dedicated to providing a 
        seamless gardening experience for enthusiasts of all levels, from beginners to seasoned gardeners.</strong></h2></div>
    <div className="a-about">
        <p></p>
        <h2><strong>Our mission is to empower individuals to create and maintain their dream gardens right at home. 
            Whether you have a small balcony or a spacious backyard, our user-friendly
             application offers a wide range of features and resources to support your gardening journey.</strong></h2>
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
            </a>
        </div>
      </div>

    </div>
  )
}

export default About
