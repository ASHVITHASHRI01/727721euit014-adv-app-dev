import { GoStarFill } from "react-icons/go";
import './Cards.css'
import primer from '../pics/primer.jpeg'
function Cards() {
    return ( 
        <div className='item-entire'>
            <div className='item-image'>
            <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer">
                <img src={primer} alt='' style={{height:'25vh', width:'100%'}} /></a>
            </div>
            <div className='item-desc'>
                <div className='item-desc-p1'><strong><p>Pre-Race Primer</p></strong><hr></hr>
                    <p>Sun </p>
                    <p>Date: Mar 24 2024</p>
                    <p>From: 6:00 AM - 7:30 AM</p> </div> 
                    <p></p>
                <p className='item-desc-p2'><b>
                    A pre-race primer yoga routine optimizes performance by combining dynamic stretchesto enhance flexibility for athletic challenges.
                    </b> </p>
                <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
                <hr></hr>
                <p className='item-desc-p3'>$35</p>
                <a href="http://localhost:5173/reg" target="_blank" rel="noopener noreferrer" className='enroll-button'>Enroll</a>

            </div>
        </div> 
        );
    }
    

export default Cards;