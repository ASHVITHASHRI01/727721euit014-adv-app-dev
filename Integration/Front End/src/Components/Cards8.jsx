import { GoStarFill } from "react-icons/go";
import './Cards.css'
import rise from '../pics/rise.jpg'
function Cards() {
    return ( 
        <div className='item-entire'>
            <div className='item-image'>
            <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer">
                <img src={rise} alt='' style={{height:'25vh', width:'100%'}} /></a>
            </div>
            <div className='item-desc'>
                <div className='item-desc-p1'>
                    <strong><p>Rise & revitalize</p></strong><hr></hr>
                    <p>Sun </p>
                    <p>Date: Mar 24 2024</p>
                    <p>From: 6:00 AM - 7:30 AM</p> </div> 
                    <p></p>
                <p className='item-desc-p2'><b>
                Rise & revitalize with a morning yoga session, awakening the body,breath, movement and mind for a rejuvenated start to the day.
                </b> </p>
                <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
                <hr></hr>
                <p className='item-desc-p3'>$45</p>
                <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer" className='enroll-button'>Enroll</a>
            </div>
        </div> 
        );
    }
    

export default Cards;