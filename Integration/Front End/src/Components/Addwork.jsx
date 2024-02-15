// import React from 'react'
import './Addwork.css'
import logoo from '../pics/logoo.png'
import nidra from '../pics/nidra.jpeg'
import fluid from '../pics/fluid.jpeg'

import vinyasa from '../pics/vinyasa.jpeg'
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
                <a href=" http://localhost:5173/work">Academy</a>
                <a href="http://localhost:5173/people">Courses</a>
                <a href="http://localhost:5173/people">Enrollments</a>
            </div>
          </div>
         </div>
      </nav>
    </header>
    <div className="entire-add">
    <div className='row-container'>
        <div className='new-item-entire'>
            <div className='new-item-image'>
                <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer">
                    <img src={vinyasa} alt='' style={{height:'25vh', width:'100%'}} />
                </a>
            </div>
            <div className='new-item-desc'>
                <div className='new-item-desc-p1'>
                    <strong>
                        <p>New Vinyasa Basic Series</p>
                    </strong>
                    <hr />
                    <p>New Tue</p>
                    <p>New Date: Jan 09 2024 - Jan 30 2024</p>
                    <p>New From: 10:30 AM - 11:45 AM</p>
                </div>
                <p></p>
                <p className='new-item-desc-p2'>
                    <b>A new 4-week series designed to guide participants in learning and practicing the essential foundations for a journey of body wellness.</b>
                </p>
                <p style={{color:'orange'}}></p>
                <hr />
                <p className='new-item-desc-p3'>$25</p>
                <br />
                <a href="#" target="_blank" rel="noopener noreferrer" className='new-enroll-button'>Add</a>
            </div>
        </div>

<div className='new-item-entire'>
    <div className='new-item-image'>
        <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer">
            <img src={nidra} alt='' style={{ height: '25vh', width: '100%' }} />
        </a>
    </div>
    <div className='new-item-desc'>
        <div className='new-item-desc-p1'>
            <strong>
                <p>New Full Moon Yoga Nidra</p>
            </strong>
            <hr />
            <p>New Thur</p>
            <p>New Date: Feb 24 2024</p>
            <p>New From: 6:00 PM - 7:00 PM</p>
        </div>
        <p></p>
        <p className='new-item-desc-p2'>
            <b>There is something incredibly powerful and grounding when we allow good vibrations to seep into our souls.</b>
        </p>
        <p style={{ color: 'orange' }}></p>
        <hr />
        <p className='new-item-desc-p3'>$32</p>
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer" className='new-enroll-button'>Add</a>
    </div>
</div>


<div className='new-item-entire'>
    <div className='new-item-image'>
        <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer">
            <img src={fluid} alt='' style={{ height: '25vh', width: '100%' }} />
        </a>
    </div>
    <div className='new-item-desc'>
        <div className='new-item-desc-p1'>
            <strong>
                <p>New Fluid Focus</p>
            </strong>
            <hr />
            <p>New Sat</p>
            <p>New Date: Feb 28 2024</p>
            <p>New From: 4:00 PM - 5:00 PM</p>
        </div>
        <p></p>
        <p className='new-item-desc-p2'>
            <b>
                Fluid focus in yoga involves seamlessly merging breath, mindfulness for a harmonious and dynamic practice.
            </b>
        </p>
        <p style={{ color: 'orange' }}>
        </p>
        <hr />
        <p className='new-item-desc-p3'>$30</p>
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer" className='new-enroll-button'>Add</a>
    </div>
</div>
</div>
</div>
    </div>

  )
}

export default Addwork

