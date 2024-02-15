import { GoStarFill } from "react-icons/go";
import './Cards.css'
import strength from '../pics/strength.jpg'
function Cards() {
    return ( 
        <div className='item-entire'>
            <div className='item-image'>
            <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer">
                <img src={strength} alt='' style={{height:'25vh', width:'100%'}} /> </a>
            </div>
            <div className='item-desc'>
                <div className='item-desc-p1'><strong><p>Building Strength</p></strong><hr></hr>
                    <p>Wed </p>
                    <p>Date: Mar 9 2024</p>
                    <p>From: 3:00 PM - 4:00 PM</p> </div> 
                    <p></p>
                <p className='item-desc-p2'><b>
                Involves engaging muscles by various poses, physical power and mental resilience on the mat.
</b> </p>
                <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
                <hr></hr> 
                <p className='item-desc-p3'>$20</p><br></br>
                <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer" className='enroll-button'>Enroll</a>

            </div>
        </div> 
        );
    }
    

export default Cards;