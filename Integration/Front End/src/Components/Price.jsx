import './Price.css'
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; 
// import { FaTree } from 'react-icons/fa';
import logoo from '../pics/logoo.png'
const Price = () => {
  return (
    <div className="home-container">
    <header>
      <div className="logo">
      <a href="http://localhost:5173/home" target="_blank" rel="noopener noreferrer" className="logo">
        <img src={logoo}></img></a>
      </div>
      <nav>
        <div className='home-book'> 
        <div className="dropdown">
            <button id="menuButton" className="dropbtn">Menu</button>
            <div className="dropdown-content">
                <a href="http://localhost:5173/home">Home</a>
                <a href=" http://localhost:5173/work">Workshops&Events</a>
                <a href="http://localhost:5173/contact">Contact</a>
                <a href="http://localhost:5173/about">About</a>
                <a href="http://localhost:5173/about">LogOut</a>
            </div>
          </div>
         </div>
      </nav>
    </header>
    <div className="price-intro">
      <h1>WELCOME</h1>
    </div>

    {/* <div className="tree1-info-container">
      <div className="tree-info">
        <FaTree className="tree-icon" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet porttitor nisi, vel imperdiet
          libero feugiat vel.
        </p>
        <button className="submit-button">Submit</button>
      </div>
      </div>
      <div className="tree2-info-container">
      <div className="tree-info">
        <FaTree className="tree-icon" />
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="submit-button">Submit</button>
      </div> </div>

      <div className="tree3-info-container">
      <div className="tree-info">
        <FaTree className="tree-icon" />
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.
        </p>
        <button className="submit-button">Submit</button>
      </div>
    </div> */}

    <div className="entire-container">
    <div className="studio-container">
      <div className="left-section">
        <h2>New to Studio</h2> <hr></hr>
      </div>
      <div className="right-section">
        <h2>New to Studio Welcome Offer: 3 Classes for $30</h2>
        <p><strong>
        For those new to AstralZen, welcome! We invite you to try 3 classes for $30. This welcome offer expires 3 weeks from sale date. Welcome Offers are non-refundable, non-transferable, non-shareable. One offer per person for new-to-studio clients only. 
          </strong></p> <br></br>
        <button>Explore</button>
      </div>
    </div>

    <div className="studio-container">
      <div className="left-section">
        <h2>MemberShip</h2> <hr></hr>
      </div>
      <div className="right-section">
        <h2>Become a Member!  $118 Monthly Unlimited Yoga on AutoPay</h2>
        <p><strong>
        Join our Unlimited Yoga Membership! Take advantage of unlimited classes at AstralZen for less than $30/week when you commit to our monthly autopay membership. Membership also includes 5 guest passes, and discounts on retail and workshops.
          </strong></p> <br></br>
        <button>Explore</button> 
        <br></br>
      </div>
    </div>
        <hr></hr>

        <div className="studio-container">
        <div className="left-section">
            <h2>Drop-In</h2> <hr></hr>
        </div>
        <div className="right-section">
            <h2>Energize & Flow Drop-In Session</h2>
        <ul><strong>
        <li>Single Class $16</li>
        <li>5-Classes $75 ($15/class)</li>
        <li>10-Classes $140 ($14/class)</li></strong>
        </ul> <br></br>
            <p><strong>
            Our weekly classes are set up on a “drop-in” basis for your convenience, meaning you can attend any regularly scheduled class with the purchase of a Single Class or Class Package. Various yoga styles ranging from Power Flow to Restorative and Yin Yoga means there is truly something for everyone. 
            </strong></p> <br></br>
            <a href="http://localhost:5173/reg"><button>Explore</button> </a>
            <br></br>
        </div>
        </div><hr></hr>

        <div className="studio-container">
        <div className="left-section">
            <h2>WORKSHOPS & SERIES</h2> <hr></hr>
        </div>
        <div className="right-section">
            <h2>Zen Vibes Gathering</h2>
            <p><strong>
            Occasionally, Yoga Off East will offer specialty classes, series of classes (which span 4-8 weeks) or events that have a specific focus and objective to support our students’ progression in the practice. These workshops will be led by Yoga Off East instructors or Special Guest instructors from other locations. 
            </strong></p> <br></br>
            <a href="http://localhost:5173/work"><button>Learn More</button> </a>
            <br></br>
        </div>
        </div><hr></hr>

        <div className="studio-container">
        <div className="left-section">
            <h2>Private Sessions</h2> <hr></hr>
        </div>
        <div className="right-section">
            <h2>One-on-One Yoga Instruction</h2>
            <ul><strong>
        <li>Single Session: $80/hour </li>
        <li>5-Sessions: $375 ($75/hr; 3 month expiration)</li>
        <li>10-Sessions: $700 ($70/hr; 6 month expiration)</li></strong>
        </ul> <br></br>
            <p><strong>
            Private sessions can be scheduled 1:1 or 2:1 and held virtually via Zoom or in-studio. These sessions are a great way to break down yoga poses and develop a personal yoga practice that you can take with you wherever you go! Whether you have specific questions or simply want to work individually with an instructor.
            </strong></p> <br></br>
            <a href="http://localhost:5173/work"><button>Learn More</button> </a>
            <br></br>
        </div>
        </div><hr></hr>
    </div>



    <div className='abt-foot'>
      <footer>
        <p>&copy; 2024 ASTRALZEN. All rights reserved.</p>
      </footer>
      <div className="abt-social-icons">
            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
            <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={30} style={{ margin: '0 10px', color: '#3498db' }} />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Price

