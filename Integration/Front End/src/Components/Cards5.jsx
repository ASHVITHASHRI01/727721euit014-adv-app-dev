import { GoStarFill } from "react-icons/go";
import './Cards.css'
import hour from '../pics/hour.jpeg'
function Cards() {
    return ( 
        <div className='item-entire'>
            <div className='item-image'>
            <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer">
                <img src={hour} alt='' style={{height:'25vh', width:'100%'}} /></a>
            </div>
            <div className='item-desc'>
                <div className='item-desc-p1'><strong><p>60-Min Flow for Energy and Release</p></strong><hr></hr>
                    <p>Fri </p>
                    <p>Date: Mar 15 2024</p>
                    <p>From: 11:00 AM - 12:30 PM</p> </div> 
                    <p></p>
                <p className='item-desc-p2'><b>
                Designed for energy and release integrates dynamic movements and calming poses, promoting vitality and stress relief.
</b> </p>
                <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
                <hr></hr>
                <p className='item-desc-p3'>$52</p>
                <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer" className='enroll-button'>Enroll</a>

            </div>
        </div> 
        );
    }
    

export default Cards;