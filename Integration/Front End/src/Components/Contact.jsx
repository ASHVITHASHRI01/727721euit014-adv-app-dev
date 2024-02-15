import './Contact.css'
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; 
import { useState } from 'react';
import logoo from '../pics/logoo.png'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission (e.g., send data to a server)
        console.log('Form submitted:', formData);
      };    
  return (
    //   <div className="home-container">
    <div className="contact-container">
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
                <a href="http://localhost:5173/reg">Enroll</a>
                <a href="http://localhost:5173/about">About</a>
                <a href="http://localhost:5173/login">Login</a>
            </div>
          </div>
         </div>
      </nav>
    </header>

    <div className='contact-left'>
        <div className='contact-image'>
            <img src='https://img.freepik.com/free-photo/office-desktop-with-laptop-business-man_23-2148174084.jpg?w=900&t=st=1706291919~exp=1706292519~hmac=1c6200afe7136da6efe943c84d25a45d4734c5ba09f35b5a1ab828d6a5b69c47' alt='Image' width='100%'></img>
        </div>
    </div>
        <div className="contact-form-container">
        <left><h1>LETS CONNECT </h1></left><p></p>
        <p><strong>Youve got questions. Ive got answers. Send me a message with the form below. </strong></p>
        <p></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"><strong>Name:</strong></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email"><strong>Email:</strong></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="message"><strong>Message:</strong></label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required ></textarea>

            <button type="submit">Send Message</button>
        </form>

        <div className="social-icons">
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

    
  )
}

export default Contact
