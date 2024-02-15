import { useState } from 'react';
import './SignUp.css';
import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const SignUp = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirm, setConfirmPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState('');
  // const navigate=useNavigate();
 
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
      name:name,
      email:email,
      password:password,
      // confirmPassword:confirm
    });

    console.log('Response:', response);
    
    if (response.status === 200 || response.status===202) {
      // Registration successful
      console.log('Registration successful:', response.data);
      // Optionally, you can navigate or perform other actions here
    } else {
      // Handle registration failure
      console.error('Registration failed');
    }
  } catch (error) {
    console.error('Error during registration:', error);
  }
};
  // const validateSignUp = () => {
  //   if (password !== confirmPassword) {
  //     setErrorMessage('Passwords do not match');
  //   } else {
  //     setErrorMessage('');
  //     alert('Registration successful!');
  //   }
  // };

  return (
    <div className="signbackground">
      <div className="signbox-align">
        <div className="signbox-container">
          <div className="s-form">
            <form onSubmit={handleSubmit}>
            <h2 className="s-title">Sign Up</h2>

            <div className="s-username">
              <label className="s-label" htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" value={name}
                onChange={(e)=>setUsername(e.target.value)} required className="s-input"  />
            </div>

            <div className="s-email">
              <label className="s-label" htmlFor="email">Email:</label>
              <input type="email" id="email" name="email"
                value={email} onChange={(e)=>setEmail(e.target.value)} required className="s-input" />
            </div>

            <div className="s-password">
  <label className="s-label" htmlFor="password">Password:</label>
  <input type="password" id="password" name="password" value={password}
    onChange={(e)=>setPassword(e.target.value)} required className="s-input" />
</div>
{/* 
<div className="s-confirm-password">
  <label className="s-label" htmlFor="confirmPassword">Confirm Password</label>
  <input type="password" id="confirmPassword"
    value={confirm} onChange={setConfirmPassword}  className="s-input" />
</div> */}


            <div >
            
              <button className="s-button" type="submit">Sign Up</button>
            </div>

            {/* <p id="error-message">{errorMessage}</p> */}
            <div className="s-login-link">
              <p>Already have an account? <a href='login'>Login</a></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


//before work code
// import { useState } from 'react';
// import './SignUp.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const validateSignUp = async () => {
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match');
//     } else {
//       try {
//         const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
//           name: username,
//           email,
//           password,
//         });
//         if (response.status === 202) {
//           // Registration successful
//           console.log('Registration successful:', response.data);
//           // Redirect to login page after successful registration
//           window.location.href = '/login';
//         } else {
//           // Handle registration failure
//           console.error('Registration failed:', response.statusText);
//           setErrorMessage('Registration failed. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error during registration:', error);
//         setErrorMessage('Registration failed. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="signbackground">
//       <div className="signbox-align">
//         <div className="signbox-container">
//           <div className="s-form">
//             <h2 className="s-title">Sign Up</h2>

//             <div className="s-username">
//               <label className="s-label" htmlFor="username">Username:</label>
//               <input type="text" id="username" name="username" value={username}
//                 onChange={(e) => setUsername(e.target.value)} required className="s-input"  />
//             </div>

//             <div className="s-email">
//               <label className="s-label" htmlFor="email">Email:</label>
//               <input type="email" id="email" name="email"
//                 value={email} onChange={(e) => setEmail(e.target.value)} required className="s-input" />
//             </div>

//             <div className="s-password">
//               <label className="s-label" htmlFor="password">Password:</label>
//               <input type="password" id="password" name="password" value={password}
//                 onChange={(e) => setPassword(e.target.value)} required className="s-input" />
//             </div>

//             <div className="s-confirm-password">
//               <label className="s-label" htmlFor="confirmPassword">Confirm Password</label>
//               <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)} required className="s-input" />
//             </div>

//             <div>
//               <button className="s-button" type="button" onClick={validateSignUp}>Sign Up</button>
//             </div>

//             <p id="error-message">{errorMessage}</p>
//             <div className="s-login-link">
//               <p>Already have an account? <Link to="/login">Login</Link></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




//1
// import { useState } from 'react';
// import './SignUp.css';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
//         name:formData.name,
//         email:formData.email,
//         password:formData.password,
//         confirmPassword:formData.confirmPassword
//       });
//       console.log(response.data);
  
//       // if (response.status === 200) {
//       //   console.log('Registration successful:', response.data);
//       //   navigate('/login');
//       // } else {
//       //   console.error('Registration failed:', response.statusText);
//       //   setErrorMessage('Registration failed. Please try again.');
//       // }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       setErrorMessage('Registration failed. Please try again.');
//     }
//   };
  

//   return (
//     <div className="signbackground">
//       <div className="signbox-align">
//         <div className="signbox-container">
//           <div className="s-form">
//             <form onSubmit={handleSubmit}>
//               <h2 className="s-title">Sign Up</h2>

//               <div className="s-username">
//                 <label className="s-label" htmlFor="username">Username:</label>
//                 <input type="text" id="username" name="username" value={formData.username}
//                   onChange={handleChange} required className="s-input" />
//               </div>

//               <div className="s-email">
//                 <label className="s-label" htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email"
//                   value={formData.email} onChange={handleChange} required className="s-input" />
//               </div>

//               <div className="s-password">
//                 <label className="s-label" htmlFor="password">Password:</label>
//                 <input type="password" id="password" name="password" value={formData.password}
//                   onChange={handleChange} required className="s-input" />
//               </div>

//               <div className="s-confirm-password">
//                 <label className="s-label" htmlFor="confirmPassword">Confirm Password:</label>
//                 <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword}
//                   onChange={handleChange} required className="s-input" />
//               </div>

//               <button className="s-button" type="submit">Sign Up</button>

//               <div className="s-login-link">
//                 <p>Already have an account? <Link to="/login">Login</Link></p>
//               </div>

//               <p id="error-message">{errorMessage}</p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


// import { useState } from 'react';
// import './SignUp.css';
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// // import { Link } from 'react-router-dom';


// const SignUp = () => {
//   // const [username, setUsername] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [confirmPassword, setConfirmPassword] = useState('');
//   // const [errorMessage, setErrorMessage] = useState('');
//   const navigate=useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',

  
//     // mobileNumber: '',
//     // gender: '',
//     // dateOfBirth: '',
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);

//       if (response.status === 200) {
//         // Registration successful
//         console.log('Registration successful:', formData);
//         navigate('/Login')
//       } else {
//         // Handle registration failure
//         console.error('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };

//   // const validateSignUp = () => {
//   //   if (password !== confirmPassword) {
//   //     setErrorMessage('Passwords do not match');
//   //   } else {
//   //     setErrorMessage('');
//   //     alert('Registration successful!');
//   //   }
//   // };

//   return (
//     <div className="signbackground">
//       <div className="signbox-align">
//         <div className="signbox-container">
//           <div className="s-form">
//             <form onSubmit={handleSubmit}>
//             <h2 className="s-title">Sign Up</h2>

//             <div className="s-username">
//               <label className="s-label" htmlFor="username">Username:</label>
//               <input type="text" id="username" name="username" value={formData.username}
//                 onChange={handleChange} required className="s-input"  />
//             </div>

//             <div className="s-email">
//               <label className="s-label" htmlFor="email">Email:</label>
//               <input type="email" id="email" name="email"
//                 value={formData.email} onChange={handleChange} required className="s-input" />
//             </div>

//             <div className="s-password">
//   <label className="s-label" htmlFor="password">Password:</label>
//   <input type="password" id="password" name="password" value={formData.password}
//     onChange={handleChange} required className="s-input" />
// </div>

// <div className="s-confirm-password">
//   <label className="s-label" htmlFor="confirmPassword">Confirm Password</label>
//   <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword}
//     onChange={handleChange} required className="s-input" />
// </div>


//             <div >
            
//               <button className="s-button" type="submit">Sign Up</button>
//             </div>

//             {/* <p id="error-message">{errorMessage}</p> */}
//             <div className="s-login-link">
//               <p>Already have an account? <a href='#'>Login</a></p>
//             </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// import { useState } from 'react';
// import './SignUp.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const validateSignUp = async () => {
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match');
//     } else {
//       try {
//         const response = await axios.post('http://localhost:8080/auth/register', {
//           username,
//           email,
//           password,
//         });
//         console.log('Registration successful:', response.data);
//         alert('Registration successful!');
//         setErrorMessage('');
//       } catch (error) {
//         console.error('Registration failed:', error);
//         setErrorMessage('Registration failed due to an unexpected error.');
//       }
//     }
//   };

//   return (
//     <div className="signbackground">
//       <div className="signbox-align">
//         <div className="signbox-container">
//           <div className="s-form">
//             <h2 className="s-title">Sign Up</h2>

//             <div className="s-username">
//               <label className="s-label" htmlFor="username">Username:</label>
//               <input type="text" id="username" name="username" value={username}
//                 onChange={(e) => setUsername(e.target.value)} required className="s-input"  />
//             </div>

//             <div className="s-email">
//               <label className="s-label" htmlFor="email">Email:</label>
//               <input type="email" id="email" name="email"
//                 value={email} onChange={(e) => setEmail(e.target.value)} required className="s-input" />
//             </div>

//             <div className="s-password">
//               <label className="s-label" htmlFor="password">Password:</label>
//               <input type="password" id="password" name="password" value={password}
//                 onChange={(e) => setPassword(e.target.value)} required className="s-input" />
//             </div>

//             <div className="s-confirm-password">
//               <label className="s-label" htmlFor="confirmPassword">Confirm Password</label>
//               <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)} required className="s-input" />
//             </div>

//             <div>
//               <button className="s-button" type="submit" onClick={validateSignUp}>Sign Up</button>
//             </div>

//             <p id="error-message">{errorMessage}</p>
//             <div className="s-login-link">
//               <p>Already have an account? <Link to="/login">Login</Link></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
