

//before
import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password
      });
      console.log(response.data);
      console.log("Login successful");
      localStorage.setItem('token',response.data.token)
      navigate('/Home');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with error:', error.response.data);
        setErrorMessage('Invalid email or password'); // Update error message based on server response
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        setErrorMessage('Network error. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error setting up request:', error.message);
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };
  
  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
  //       email,
  //       password,
  //     });
  
  //     if (response.status === 200 || response.status === 202) {
  //       console.log('Login successful:', response.data);
  //       window.location.href = '/home';
  //       // Redirect the user to the desired page upon successful login
  //       // Example: window.location.href = '/dashboard';
  //     } else {
  //       console.error('Login failed:', response.statusText);
  //       setErrorMessage('Login failed. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     setErrorMessage('Login failed. Please try again.');
  //   }
  // };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-heading">Login</h2>
<form onSubmit={handleSubmit}>
          <label className="login-label" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="login-label" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-button" type=
          "submit" >
            Login
          </button>
</form>
          <div className="existing-account">
            <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
          </div>

          <p id="error-message">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import { useState } from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios'; // Import Axios library

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const validateLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/login', { // Adjust URL as per your backend endpoint
//         email,
//         password
//       });
//       console.log(response.data);
//       alert('Login successful!');
//       // Redirect to another page upon successful login
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setErrorMessage('Invalid email or password');
//       } else {
//         setErrorMessage('An unexpected error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div className="login-background">
//       <div className="login-container">
//         <div className="login-form">
//           <h2 className="login-heading">Login</h2>
//           <label className="login-label" htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label className="login-label" htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button className="login-button" type="button" onClick={validateLogin}>
//             Login
//           </button>

//           <div className="existing-account">
//             <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
//           </div>

//           <p id="error-message">{errorMessage}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import { useState } from 'react';
// import './Login.css'; // Import your CSS file
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//     validateForm(newEmail, password);
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     validateForm(email, newPassword);
//   };

//   const validateForm = (newEmail, newPassword) => {
//     // Example validation for email and password
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Basic email and password validation
//     const isEmailValid = emailRegex.test(newEmail);
//     const isPasswordValid = newPassword.length >= 6;

//     // Update the button disabled state and error message
//     setIsButtonDisabled(!(isEmailValid && isPasswordValid));
//     setErrorMessage((!isEmailValid || !isPasswordValid) ? 'Invalid email or password' : '');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
//         email,
//         password
//       });
//       console.log(response.data);
//       console.log("Login successful");
//       navigate('/Home');
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.error('Server responded with error:', error.response.data);
//         setErrorMessage('Invalid email or password'); // Update error message based on server response
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error('No response received:', error.request);
//         setErrorMessage('Network error. Please try again later.');
//       } else {
//         // Something happened in setting up the request that triggered an error
//         console.error('Error setting up request:', error.message);
//         setErrorMessage('An unexpected error occurred. Please try again later.');
//       }
//     }
//   };
  

//   return (
//     <div className='flowers'>
//       <div className="login-form-box">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h1>User Login</h1>
//           <div className="input-box">
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={email}
//               onChange={handleEmailChange}
//               required
//             />
//           </div>
//           <div className="input-box">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//             />
//           </div>
//           <p className="error-message">{errorMessage}</p>
//           <button className={`submit-btn ${isButtonDisabled ? 'disabled' : ''}`} type="submit" disabled={isButtonDisabled}>
//             Login
//           </button>
//           <h5 className="rem">Dont have an account? <Link to="/signup">Register</Link></h5>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

//arthi
// import  { useState } from 'react';
// import './Login.css'; // Import your CSS file
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// const Login = () => {
//   const navigate=useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//     validateForm(newEmail, password);
//   };

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     validateForm(email, newPassword);
//   };

//   const validateForm = (newEmail, newPassword) => {
//     // Example validation for email and password
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Basic email and password validation
//     const isEmailValid = emailRegex.test(newEmail);
//     const isPasswordValid = newPassword.length >= 6;

//     // Update the button disabled state and error message
//     setIsButtonDisabled(!(isEmailValid && isPasswordValid));
//     setErrorMessage((!isEmailValid || !isPasswordValid) ? 'Invalid email or password' : '');
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//    try{
//     const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
//         email,
//         password
//       });
//       console.log(response.data);
//       console.log("Login sucessfull");
//       navigate('/Home');
//     }
//     catch(error){
//       console.error('Login failed',error);
//     }
//   };

//   return (
    
//     <div className='flowers'>
//       <div className="login-form-box">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h1>User Login</h1>
//           <div className="input-box">
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={email}
//               onChange={handleEmailChange}
//               required
//             />
//           </div>
//           <div className="input-box">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//             />
//           </div>
//           <p className="error-message">{errorMessage}</p>
//           <button className={`submit-btn ${isButtonDisabled ? 'disabled' : ''}`} type="submit" disabled={isButtonDisabled}>
//   Login
// </button>
//           <h5 className="rem">Dont have an account?<Link to="/signup">Register</Link></h5>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



//chatgpt

// import { useState } from 'react';
// import './Login.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const validateLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
//         username,
//         password,
//       });

//       if (response.status === 202) {
//         // Login successful
//         console.log('Login successful:', response.data);
//         // Redirect to home page or perform other actions as needed
//         alert('Login successful!');
//       } else {
//         // Handle login failure
//         console.error('Login failed:', response.statusText);
//         setErrorMessage('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setErrorMessage('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="login-background">
//       <div className="login-container">
//         <div className="login-form">
//           <h2 className="login-heading">Login</h2>
//           <label className="login-label" htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />

//           <label className="login-label" htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <div>
//             <button className="login-button" type="button" onClick={validateLogin}>
//               Login
//             </button>
//           </div>

//           <div className="existing-account">
//             <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
//           </div>
//           <p id="error-message">{errorMessage}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



//1
// // //new Login.jsx

// import { useState } from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';
// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const validateLogin = () => {
//     if (username === 'example' && password === 'password') {
//       setErrorMessage(''); 
//       alert('Login successful!'); 
//     } else {
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-background">
//       <div className="login-container">
//         <div className="login-form">
//           <h2 className="login-heading">Login</h2>
//           <label className="login-label" htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />

//           <label className="login-label" htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <div>
//           {/* <Link to="/home"> */}
//           <button className="login-button" type="button" onClick={validateLogin}>
//             Login
//             </button> 
//             {/* </Link> */}
//         </div>

        

//         <div className="existing-account">
//           <p>Dont have an account? <Link to="/signup"><a href='#'>Sign Up</a></Link></p>
//         </div>
//         <p id="error-message">{errorMessage}</p>
//       </div>
//     </div></div>
//   );
// };

// export default Login;

// import { useState } from 'react';
// import './Login.css';
// import { Link, useHistory } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const history = useHistory();

//   const validateLogin = () => {
//     if (username === 'example' && password === 'password') {
//       setErrorMessage(''); 
//       alert('Login successful!'); 
//       history.push('/home');
//     } else {
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-background">
//       <div className="login-container">
//         <div className="login-form">
//           <h2 className="login-heading">Login</h2>
//           <label className="login-label" htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />

//           <label className="login-label" htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <div>
//             <button className="login-button" type="button" onClick={validateLogin}>
//               Login
//             </button> 
//           </div>

//           <div className="existing-account">
//             <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
//           </div>
//           <p id="error-message">{errorMessage}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
