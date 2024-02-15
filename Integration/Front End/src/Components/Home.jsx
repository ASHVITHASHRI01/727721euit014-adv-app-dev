import './Home.css';
import { useRef, useEffect, useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; 
import zenyoga from '../pics/zenyogaa.png'
import logo from '../pics/logoo.png'
import Cards1 from './Cards1';
import Cards2 from './Cards2';
import Cards3 from './Cards3';
import image1 from '../pics/image1.jpg';
import Image2 from '../pics/image2.jpg'
import image4 from '../pics/image4.jpg'
import News1 from './News1';
import News2 from './News2';
import News3 from './News3';
const Home = () => {
  const homeAbtRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (homeAbtRef.current) {
      observer.observe(homeAbtRef.current);
    }

    return () => {
      if (homeAbtRef.current) {
        observer.unobserve(homeAbtRef.current);
      }
    };
  }, []);

  return (
      <div className="home-container">
      <header>
        <div className="logo"> 
      <a href="http://localhost:5173/home" target="_blank" rel="noopener noreferrer" className="logo">
          <img src={logo}></img></a>
        </div>
        <nav>
          <div className='home-book'> 
          <div className="dropdown">
              <button id="menuButton" className="dropbtn">Menu</button>
              <div className="dropdown-content">
                <a href=" http://localhost:5173/work">Workshops&Events</a>
                <a href="http://localhost:5173/price">Price</a>
                <a href="http://localhost:5173/reg">Enroll</a>
                <a href="http://localhost:5173/contact">Contact</a>
                <a href="http://localhost:5173/about">About</a>
                <a href="http://localhost:5173/">Logout</a>
              </div>
            </div>
           </div>
        </nav>
      </header>

      <div className="content-container">
          <div className='home-left'>
            <div className="home-text">
              <img src={zenyoga} width='30%' height='20%'/>
              <h1>YOGA THERAPY &</h1>
              <h1>HOLISTIC HEALTH</h1>
              <p>With AstralZen</p>
            </div>
          </div>
          <div className='home-right'>
              <div className="home-section">
                <img className="imagelogo" src={image1} alt="Image" height='486vh' width='757vh' />
              </div> 
          </div>
      </div>
  
      <main>

      <section className="news-home">
        <h1>NEWS</h1>
        <News1/><News2/><News3/>
        </section>
        <br></br>

        <section className="hero">
          <h2>One of the most valuable benefits of yoga is our ability to gain insight into who we are and why we are here. Each one of us is here on purpose, with purpose. Yoga instigates the courage, curiosity and creativity for each of us to discover the truth of our own inherent value.</h2>
          <h2>The You Be You message is a call to action, a reminder that we have work to do in this life. Our actions matter and the sooner each of us becomes accountable for knowing what actions will leave this world a better place, the sooner we will all be in a better place.</h2>
          <a href="http://localhost:5173/work" className="btn-primary">FIND A CLASS</a>
        </section>
        <br></br>
        <section className="yoga-class">
          <div className='yoga-pic'>
            <img src="https://images.pexels.com/photos/8436627/pexels-photo-8436627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Image" className={isVisible ? 'animate' : ''}></img>
          </div>
        <section className="features">
          <div className="feature">
            <h3>Lifestyle</h3>
            <p>Yoga has the remarkable ability to transform lifestyles by offering a holistic approach to well-being. Beyond its physical benefits of increased flexibility and strength, yoga instills a profound shift in mindset and lifestyle choices.Yogas emphasis on stress reduction and mental clarity contributes to a more balanced and centered approach to daily life.  </p>
          </div>
          <div className="feature">
            <h3>Self-Care and Fresh</h3>
            <p>Incorporating yoga into your routine is a powerful means of self-care, offering a rejuvenating experience that brings both physical and mental freshness. Through intentional breathwork, invigorating postures, and mindful meditation, self-awareness, fostering a deeper connection yoga provides a sanctuary for self-discovery</p>
          </div>
          <div className="feature">
            <h3>Holistic Wellness</h3>
            <p>Yoga is not just a physical exercise; it is a lifestyle that promotes holistic wellness. It addresses the interconnectedness of the body, mind, and spirit, aiming for overall health and balance.It becomes an opportunity to nurture yourself, fostering a deep sense that emanates from within.Ultimately leading to a more mindful and fulfilling lifestyle.</p>
          </div>
        </section>
        </section>
        <br></br>
      
        <section className="home-hero">
        <div className="image-gallery">
      <div className="gallery-item">
        <a href="http://localhost:5173/work">
          <img src={image4} alt="Image1" className="responsive-image" />
        </a> <br></br>
        <strong><p>WorkShops</p></strong>
      </div>

      <div className="gallery-item">
        <a href="link-to-image-2">
          <img src={image1}alt="Image 2" className="responsive-image" />
        </a> <br></br>
        <strong><p>Events</p></strong>
      </div>

      <div className="gallery-item">
        <a href="http://localhost:5173/price">
          <img src={Image2}  alt="Image 3" className="responsive-image" />
        </a> <br></br>
        <strong><p>Prices</p></strong>
      </div>

      <div className="gallery-item">
        <a href="http://localhost:5173/home">
          <img src={image4} alt="Image 4" className="responsive-image" />
        </a> <br></br>
        <strong><p>Updates</p></strong>
      </div>
    </div>
        
        </section>
        <br></br>
      <div className='before-card'> <h1>EXPLORE WORKSHOPS AND EVENTS</h1></div> 
    <div className='home-cards'>
      <Cards1/> <Cards2/> <Cards3/> 
      </div>
        <br></br>
        <div className={`home-abt ${isVisible ? 'visible' : ''}`} ref={homeAbtRef}>
          <h3>You have the opportunity to choose from different styles every day and make your yoga path as different, flexible and varied as possible.</h3>
          <br></br>
          <h3>Conformity and unity yoga are alien to us. We value individual timetables for your needs.</h3>
          <br></br>
          <h3>Our experienced yoga teachers will accompany you on this path.</h3>
          <br></br>
          <h3>We look forward to seeing you!</h3>
        </div>
      </main>
    <div className='foot'>
      <footer>
        <p>&copy; 2024 ASTRALZEN. All rights reserved.</p>
      </footer>
      <div className="home-social-icons">
            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
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
  );
} 

export default Home

