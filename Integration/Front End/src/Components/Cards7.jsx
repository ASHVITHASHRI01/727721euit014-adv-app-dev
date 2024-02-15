import { GoStarFill } from "react-icons/go";
import './Cards.css'
import dimen from '../pics/dimen.jpeg'
function Cards() {
    return ( 
        <div className='item-entire'>
            <div className='item-image'>
            <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer">
                <img src={dimen} alt='' style={{height:'25vh', width:'100%'}} /></a>
            </div>
            <div className='item-desc'>
                <div className='item-desc-p1'><strong><p>3 Dimensional Yoga</p></strong><hr></hr>
                    <p>Sun </p>
                    <p>Date: Mar 24 2024</p>
                    <p>From: 6:00 AM - 7:30 AM</p> </div> 
                    <p></p>
                <p className='item-desc-p2'><b>
                Designed for energy and release integrates dynamic movements and calming poses, promoting vitality and stress relief.
</b> </p>
                <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
                <hr></hr>
                <p className='item-desc-p3'>$42</p>
                <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer" className='enroll-button'>Enroll</a>
            </div>
        </div> 
        );
    }
    

export default Cards;