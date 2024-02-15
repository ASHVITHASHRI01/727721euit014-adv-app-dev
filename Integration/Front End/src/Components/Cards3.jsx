
import { GoStarFill } from "react-icons/go";
import './Cards.css'
import fluid from '../pics/fluid.jpeg'
function Cards() {
    return ( 
        <div className='item-entire'>
            <div className='item-image'>
            <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer">
                <img src={fluid} alt='' style={{height:'25vh', width:'100%'}} /></a>
            </div>
            <div className='item-desc'>
                <div className='item-desc-p1'><strong><p>Fluid Focus</p></strong><hr></hr>
                    <p>Sat </p>
                    <p>Date: Feb 28 2024</p>
                    <p>From: 4:00 PM - 5:00 PM</p> </div> 
                    <p></p>
                <p className='item-desc-p2'><b>
Fluid focus in yoga involves seamlessly merging breath,mindfulness for a harmonious and dynamic practice.</b> </p>
                <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
                <hr></hr>
                <p className='item-desc-p3'>$30</p> <br></br>
                <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer" className='enroll-button'>Enroll</a>

            </div>
        </div> 
        );
    }
    

export default Cards;