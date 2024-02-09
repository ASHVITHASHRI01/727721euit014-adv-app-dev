// import React from 'react'
import logoo from '../pics/logoo.png'
import './Addwork.css'
import Cards1 from './Cards1';
import Cards2 from './Cards2';
import Cards3 from './Cards3';
import Cards4 from './Cards4';
const Addwork = () => {
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
                <a href="http://localhost:5173/reg">Enrollments</a>
                {/* <a href="http://localhost:5173/about">About</a> */}
                {/* <a href="http://localhost:5173/login">Login</a> */}
            </div>
          </div>
         </div>
      </nav>
    </header>
    <div className='work-cards'>
      <Cards1/> <Cards2/> <Cards3/> <Cards4/>
      </div>
    </div>
  )
}

export default Addwork


{/* <div className="home-container">
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
                <a href="http://localhost:5173/reg">Enrollments</a>
                {/* <a href="http://localhost:5173/about">About</a> */}
                {/* <a href="http://localhost:5173/login">Login</a> */}
    //         </div>
    //       </div>
    //      </div>
    //   </nav>
    // </header> */}