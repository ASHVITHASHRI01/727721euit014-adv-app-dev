//import React from 'react'

// const Hello = () => {
//   return (
//     <div>
//       <h1>Hello world</h1>
//     </div>
//   )
// }

// export default Hello


// old Login.jsx

// import { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const validateLogin = () => {
//     // Basic validation - you should implement proper authentication logic
//     if (username === 'example' && password === 'password') {
//       setErrorMessage(''); // Clear error message
//       alert('Login successful!'); // Replace with your actual login logic
//     } else {
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="loginbg">
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="button" onClick={validateLogin}>
//           Login
//         </button>
//       </div>

//       <p id="error-message">{errorMessage}</p>
//     </div>
//     </div>
//   );
// };

// export default Login;

// 

/*old login.css*/

/* .lcontainer {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  llabel {
    margin-bottom: 18px;
  }
  
  input {
    padding: 8px;
    margin-bottom: 16px;
  }
  
  lbutton {
    padding: 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 17px;
    cursor: pointer;
  }
  
  lbutton:hover {
    background-color: #22364b;
  }
  
  #error-message {
    color: red;
    margin-top: 10px;
  } */
   

   /* Login.css */

  /* .loginbg{
    background-image: url('https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?w=900&t=st=1705990912~exp=1705991512~hmac=0f55893b59e77104634b2babc8520c62568f0db4c445e388d1267c1ce2ec643a'); /* Replace with your desired background image URL   https://source.unsplash.com/1600x900/?water
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 850px;
    /* margin: 0; Remove default margin to cover the entire viewport 
  }
.login-container {
  /* background: linear-gradient(to bottom, #ff758c, #ff7eb3); 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.login-form {
  background: linear-gradient(to bottom, rgba(163, 221, 237, 0.7),transparent);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin-left: 1000px;
  
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #4b6cb7;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #394f9c;
}

#error-message {
  color: #e74c3c;
  margin-top: 10px;
  text-align: center;
}


 */


//old  SignUp.jsx

// import { useState } from 'react';
// //import { Link } from 'react-router-dom';
// import './SignUp.css';
// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const validateSignUp = () => {
//     // Basic validation - you should implement proper registration logic
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match');
//     } else {
//       setErrorMessage('');
//       alert('Registration successful!'); // Replace with your actual registration logic
//     }
//   };

//   return (
//     <div className="signbackground">
//     <div className="signbox-align">
//     <div className="scontainer">
//     <div className="s-form">
//         <h2>Sign Up</h2>
// <p></p>
//         <label htmlFor="username">Username:   </label>
//         <input type="text" id="username" name="username" value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required/>

//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required />


//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required />

//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input type="password" id="confirmPassword" name="confirmPassword" 
//         value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
//           required />
//         <br></br>
//         <div className="signbutton">
//         <button type="button" onClick={validateSignUp}> Sign Up </button> </div>
      
//       <p id="error-message">{errorMessage}</p>
//        <p>Already have an account? <a href='#'>Login</a> </p>
//        {/* <Link to="/login">Log In</Link> */}
//     </div>
//     </div> 
//     </div>
//     </div>

//   );
// };

// export default SignUp;



/*old SignUp.css

body ,html{
  margin: 0;
  padding: 0;
  height: 100%;
  /* width: 100%; 
  overflow: hidden; 
}
.signbackground {
  background-image: url('https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?w=900&t=st=1705990912~exp=1705991512~hmac=0f55893b59e77104634b2babc8520c62568f0db4c445e388d1267c1ce2ec643a'); 
  /* Replace with your desired background image URL   https://source.unsplash.com/1600x900/?water
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  /* align-items: center; 
  height: 500px;
  width: 850px;
  margin-right: 500px;
  /* position: absolute; */
  /* margin: 0; Remove default margin to cover the entire viewport 
}

.scontainer {
    background: linear-gradient(to bottom, rgba(163, 221, 237, 0.7),transparent);
    padding: 40px;
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 265px;
    margin-left: 1233px; to move the box right  
    height: 410px;
    /* background-image: url('https://source.unsplash.com/800x600/?nature');  to add bg inside box*/
    /* display: flex; Use flex container */
    /* justify-content: flex-end;  

  }
  .signbox-align{
    height: 220px;
    width: 490px;
    margin-right: 1100px;
  }

  .s-form {
    display: flex;
    flex-direction: column;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1px;
    margin-top: -29px;  /*to move the signup title
  }
  
  label {
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    margin-bottom: 16px;
    margin-top: 15px;
  }
  
  .slabel label{
    margin-bottom:8px;
    margin-top: 10px;
  }
  .slabel input{
    padding: 8px;
    margin-bottom: 16px;
    margin-top: 15px;
  }
  .signbutton {
    padding: 10px;
    background-color: #007BFF;
    color: #ffffff;
    border: none;
    border-radius: 17px;
    cursor: pointer;
    margin-bottom: -40px;
    height: 20px;
  }
  
  .signbutton:hover {
    background-color: #0056b3;
    color: #ffffff;
  }
  
  #error-message {
    color: red;
    margin-top: 10px;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    .scontainer {
      margin-left: 0;
    }
  } 


   */

  // //another old SignUp.jsx

// import { useState } from 'react';
// import './SignUp.css';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const validateSignUp = () => {
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match');
//     } else {
//       setErrorMessage('');
//       alert('Registration successful!');
//     }
//   };

//   return (
//     <div className="signbackground">
//       <div className="signbox-align">
//         <div className="signbox-container">
//           <div className="s-form">
//             <h2 className="s-title">Sign Up</h2>

//             <label className="s-label" htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="s-input"
//             />

//             <label className="s-label" htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="s-input"
//             />

//             {/* <label className="s-label" htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="s-input"
//             /> */}
//             <div className="s-label">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="s-input"
//               />
//             </div>

//             {/* <label className="s-label" htmlFor="confirmPassword">Confirm Password:</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="s-input"
//             /> */}
//             <div className="s-label">
//               <label htmlFor="confirmPassword">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//                 className="s-input"
//               />
//             </div>
            
//             <div className="s-button">
//               <button type="button" onClick={validateSignUp}>Sign Up</button>
//             </div>

//             <p id="error-message">{errorMessage}</p>
//             <p>Already have an account? <a href='#'>Login</a></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export defau
//Home.jsx nav
{/* <li><Link to="/">Home</Link></li> */}
            {/* <li><a>Bookings</a></li>
            <li><a>Contact</a></li>
            <li><a>Blog</a></li>
            <li><a>About</a></li> */}
          {/* </ul> */}
  
/* <div className="image-gallery">
      <div className="image-item">
        <a href="https://images.pexels.com/photos/13849206/pexels-photo-13849206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
          <img src="image1.jpg" alt="Image 1" className="responsive-image" />
        </a>
        <p><strong>Schedule</strong></p>
      </div>
      <div className="image-item">
        <a href="https://images.pexels.com/photos/8436605/pexels-photo-8436605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
          <img src="image2.jpg" alt="Image 2" className="responsive-image" />
        </a>
        <p><strong>Events and Workshops</strong></p>
      </div>
      <div className="image-item">
        <a href="link-to-image-3">
          <img src="image-3.jpg" alt="Image 3" className="responsive-image" />
        </a>
        <p><strong>Image 3</strong></p>
      </div>
      <div className="image-item">
        <a href="https://images.pexels.com/photos/6339347/pexels-photo-6339347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
          <img src="image4.jpg" alt="Image 4" className="responsive-image" />
        </a>
        <p><strong>Image 4</strong></p>
      </div>
    </div> */

//  <div className="centered-image">
//         <img src={zenyoga} />
//       </div>
//       <div className="intro-text">
//         <h1>YOGA THERAPY &</h1>
//         <h1>HOLISTIC HEALTH</h1>
//         <p>With AstralZen</p>
//       </div>
/* <div className="centered-image">
        <img src={zenyoga} />
      </div>
      <div className="intro-text">
        <h1>YOGA THERAPY &</h1>
        <h1>HOLISTIC HEALTH</h1>
        <p>With AstralZen</p>
      </div>

//home css
 /* .book ul {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .book li {
      margin-bottom: 10px;
    }
  } */
  
  /* nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    /* background-color: rgba(145, 205, 225, 0.8); 
    z-index: 1000;
    position: relative;
  }
  
  /* .home-book {
    margin-left: auto;
  } 
  
  #menuButton {
    display: none;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 100%;
    left: 0;
  }
  
  .dropdown-content li {
    margin-right: 20px;
  }
  
  .dropdown-content a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  @media screen and (max-width: 768px) {
    nav {
      flex-direction: column;
    }
  
    .home-book {
      margin-right: 0;
      margin-left: 0;
      order: 1;
    }
  
    #menuButton {
      display: block;
    }
  
    .dropdown-content {
      display: none;
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
    }
  
    .dropdown:hover .dropdown-content {
      display: flex;
    }
  
    .dropdown-content a {
      text-align: center;
      width: 100%;
      box-sizing: border-box;
    }
  } */
  /* .dropbtn {
    display: none;
  } */


/* .home-book .dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer; 
}

@media screen and (max-width: 600px) {
  .home-book {
    text-align: center;
    margin: 0; 
  }

  #menuButton {
    display: block;
  }

  .home-book .dropdown-content {
    position: relative;
    width: 100%;
  }

  .home-book:hover .dropdown-content {
    display: none;
  }

  .home-book .dropbtn {
    display: none;
  }
}
.home-book:hover .dropdown-content {
  display: block;
} */


    /* @media screen and (max-width: 600px) {
      .home-book .dropdown-content {
        display: none;
        position: absolute;
        background-color: lightgreen;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
      
      #menuButton {
        display: block;
      }
    
      .home-book .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        cursor: pointer;
      }

      .home-book .dropdown-content a:hover {
        background-color: red; /* Add background color on hover if needed 
      }
    
      .home-book .dropdown:hover .dropdown-content {
        display: block;
      }
    
      .home-book .dropbtn {
        display: none;
      }
    }


    
    /* contact.css

    .contact-left{
    /* height: auto; 
    width: 50%;
    background-color: #62b770;
    float: left;
  }

.contact-image{
    width:100px;
    margin-left: 20px;
    margin-top: 20px;
}

.contact-right{
    /* height: 83vh; 
    width: 50%;
    background-color: #2988a0;
    float: right;
  }

  .contact-form-container {
    max-width: 600px;
    margin: 30px auto; /* Adjusted margin 
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
  }
  
  input,
  textarea {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }
  
  button {
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  
  @media screen and (max-width: 768px) {
    .contact-form-container {
      padding: 15px;
    }
  } */

  /*   */

  //academy add
  
// import './Academy.css'
// import{ useState } from 'react';

// import logoo from '../pics/logoo.png'
// const Academy = () => {
//   const [academyData, setAcademyData] = useState({
//     name: '',
//     email: '',
//     location: '',
//     description: '',
//     phoneNumber: ''
//   });

//   const [selectedAcademy, setSelectedAcademy] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAcademyData({
//       ...academyData,
//       [name]: value
//     });
//   };

//   const handleAdd = () => {
//     if (!academyData.name || !academyData.email || !academyData.location) {
//       console.log('Please fill in all required fields.');
//       return;
//     }

//     console.log('Academy added:', academyData);
    
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });
//   };

//   const handleUpdate = () => {
//     if (!selectedAcademy) {
//       console.log('Please select an academy to update.');
//       return;
//     }

//     console.log('Academy updated:', selectedAcademy);
//     console.log('Updated details:', academyData);
    
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });

//     setSelectedAcademy(null);
//   };

//   const handleDelete = () => {
//     console.log('Academy deleted:', academyData.name);
    
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });
//   };

//   return (
//     <div className="dash-container">
//     <header>
//       <div className="logo">
//         <img src={logoo}></img>
//       </div>
//       <nav>
//         <div className='home-book'> 
//         <div className="dropdown">
//             <button id="menuButton" className="dropbtn">Menu</button>
//             <div className="dropdown-content">
//                 <a href="http://localhost:5173/dash">Home</a>
//                 <a href=" http://localhost:5173/courses">Courses</a>
//                 <a href="http://localhost:5173/people">Enrollments</a>
//                 <a href=" http://localhost:5173/admin">LogOut</a>
//             </div>
//           </div>
//          </div>
//       </nav>
//     </header>
//     <div className="addcourse-background"></div>
//     <div className="container">
//       <h2>Academy Form</h2>
//       <form>
//         <div className="form-field">
//           <label htmlFor="name" className="field-label">Academy Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={academyData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="email" className="field-label">Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={academyData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="location" className="field-label">Location:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="location"
//             name="location"
//             value={academyData.location}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="description" className="field-label">Description:</label>
//           <textarea
//             className="form-control"
//             id="description"
//             name="description"
//             value={academyData.description}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="phoneNumber" className="field-label">Phone Number:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={academyData.phoneNumber}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="button-container">
//           <button type="button" className="btn btn-primary" onClick={handleAdd}>
//             Add
//           </button>
//           <button type="button" className="btn btn-success" onClick={handleUpdate}>
//             Update
//           </button>
//           <button type="button" className="btn btn-danger" onClick={handleDelete}>
//             Delete
//           </button>
//         </div>
//       </form>
//     </div>
      
//     </div>
//   )
// }

// export default Academy
