// import React from 'react'
import './Dash.css'
import logoo from '../pics/logoo.png'
import zenyoga from '../pics/zenyogaa.png'
import image1 from '../pics/image1.jpg';

const Dash = () => {
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
            <a href=" http://localhost:5173/add">Workshops&Events</a>
                <a href="http://localhost:5173/reg">Enrollments</a>
                {/* <a href="http://localhost:5173/about">About</a> */}
                {/* <a href="http://localhost:5173/login">Login</a> */}
            </div>
          </div>
         </div>
      </nav>
    </header>
    <div className="content-container">
          <div className='home-left'>
            <div className="home-text">
              <img src={zenyoga} width='20%' height='20%'/>
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
    </div>
  )
}

export default Dash
