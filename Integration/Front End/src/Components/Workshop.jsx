// import React from 'react'
import './Workshop.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './People.css'
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Make sure to import the necessary icons
import logoo from '../pics/logoo.png'
import axios from 'axios';
// import Cards1 from './Cards1';
// import Cards2 from './Cards2';
// import Cards3 from './Cards3';
// import Cards4 from './Cards4';
// import Cards5 from './Cards5';
// import Cards6 from './Cards6';
// import Cards7 from './Cards7';
// import Cards8 from './Cards8';
const Workshop = () => {
  const [servicesData, setServicesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(token)
      if (!token) {
        setError('Token not found. Please log in again.');
        return;
      }

      const response = await axios.get("http://localhost:8080/api/v1/auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Fetched data:', response.data);

      // Update the state with the fetched data
      setServicesData(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Fetching data failed:', error);
      setError('Fetching data failed. Please try again.'); // Set a generic error message
    }
  };
  // const handleEnroll = (id) => {
  //   // Handle enrollment logic here, using the ID of the selected row
  //   console.log('Enrolling for service with ID:', id);
  // };

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
            <a href=" http://localhost:5173/home">Home</a>
                <a href="http://localhost:5173/price">Price</a>
                <a href="http://localhost:5173/reg">Enroll</a>
                <a href="http://localhost:5173/contact">Contact</a>
                <a href="http://localhost:5173/about">About</a>
                <a href="http://localhost:5173/about">LogIn</a>
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
    </section>
    <div className='adminback'>
      <div className='viewback'>
        <div className="views">
          <section id="view">
            <center>
              <h2 className='h2ad'>View Academy</h2>
            </center>
            {error && <p className="error-message">{error}</p>}
            <table className='admintable'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phonenumber</th>
                  <th>Location</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr key={index}>
                    <td>{service.name}</td>
                    <td>{service.email}</td>
                    <td>{service.phonenumber}</td>
                    <td>{service.location}</td>
                    <td>{service.description}</td>
                    <td>
                    {/* <Link to={`/view/${service.id}`}>View Course</Link> */}<Link to="/view">
                      <button >View Course</button></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
{/* 
    <div className='work-cards'>
      <Cards1/> <Cards2/> <Cards3/> <Cards4/>
      </div>
      <div className='work-cards'>
      <Cards5/> <Cards6/> <Cards7/> <Cards8/>
      </div> */}
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
