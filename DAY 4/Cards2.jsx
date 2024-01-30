// // import React, { Component } from 'react'
// import { GoStarFill } from "react-icons/go";
// import './Cards.css'
// import card from '../pics/card.jpeg'
// function Cards() {
//     return ( 
//         <div className='item-entire'>
//             <div className='item-image'>
//                 <img src={card} alt='' style={{height:'25vh', width:'100%'}} />
//             </div>
//             <div className='item-desc'>
//                 <p className='item-desc-p1'>Full Moon Yoga Nidra</p><hr></hr>
//                 <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
//                 <p className='item-desc-p2'>Name a star after your loved one and get it framed with constellation </p>
//                 <hr></hr>
//                 <p className='item-desc-p3'>$54</p>
//             </div>
//         </div> 
//         );
//     }
    

// export default Cards;

// import React, { Component } from 'react'
import { GoStarFill } from "react-icons/go";
import './Cards.css'
import nidra from '../pics/nidra.jpeg'
function Cards() {
    return ( 
        <div className='item-entire'>
            <div className='item-image'>
                <a href="https://www.youtube.com/watch?v=KgiY-o6SWWU" target="_blank" rel="noopener noreferrer">
                <img src={nidra} alt='' style={{height:'25vh', width:'100%'}} /></a>
            </div>
            <div className='item-desc'>
                <div className='item-desc-p1'><strong><p>Full Moon Yoga Nidra</p></strong><hr></hr>
                    <p>Thur </p>
                    <p>Date: Feb 24 2024</p>
                    <p>From: 6:00 PM - 7:00 PM</p> </div> 
                    <p></p>
                <p className='item-desc-p2'><b>There is something incredibly powerful and grounding when we allow good vibrations to seep into our souls.</b> </p>
                <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
                <hr></hr>
                <p className='item-desc-p3'>$54</p>
            </div>
        </div> 
        );
    }
    

export default Cards;