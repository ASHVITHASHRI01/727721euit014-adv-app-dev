// import React, { Component } from 'react'
import { GoStarFill } from "react-icons/go";
import './Cards.css'
// import card from '../pics/card.jpeg'
import vinyasa from '../pics/vinyasa.jpeg'
function Cards() {
    return ( 
        <div className='item-entire'>
            <div className='item-image'>
            <a href="https://www.youtube.com/watch?v=bzSpwM9LiRs" target="_blank" rel="noopener noreferrer">
                <img src={vinyasa} alt='' style={{height:'25vh', width:'100%'}} /></a>
            </div>
            <div className='item-desc'>
                <div className='item-desc-p1'><strong><p>Vinyasa Basic Series</p></strong><hr></hr>
                    <p>Tue </p>
                    <p>Date: Jan 09 2024 - Jan 30 2024</p>
                    <p>From: 10:30 AM - 11:45 AM</p> </div> 
                    <p></p>
                <p className='item-desc-p2'><b>A 4-week series to learn and practice the foundational aspects of Vinyasa Yoga.</b> </p>
                <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
                <hr></hr>
                <p className='item-desc-p3'>$54</p>
            </div>
        </div> 
        );
    }
    

export default Cards;