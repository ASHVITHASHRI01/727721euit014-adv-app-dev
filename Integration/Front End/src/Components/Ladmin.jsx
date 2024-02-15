import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const validateForm = (newEmail, newPassword) => {
    // Example validation for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic email and password validation
    const isEmailValid = emailRegex.test(newEmail);
    const isPasswordValid = newPassword.length >= 6;

    // Update the error messages
    setEmailError(isEmailValid ? '' : 'Invalid email address');
    setPasswordError(isPasswordValid ? '' : 'Password should be at least 6 characters');

    // Update the button disabled state
    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password
      });
      console.log(response.data);
      if (email === 'admin@gmail.com' && password === 'Admin@123') {
        // Assuming the response contains a token upon successful login
        localStorage.setItem('token', response.data.token);
        navigate('/dash');
      } else {
        window.alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

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

{/* 
// <div className="login-container">
    //   <div className="side-image"></div>
    //   <div className="adminform">
    //     <h2>Admin Login</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="form-group">
    //         <label htmlFor="email">Email:</label>
    //         <input 
    //           type="email"
    //           id="email"
    //           placeholder="Enter your email"
    //           value={email}
    //           onChange={handleEmailChange}
    //           required
    //         />
    //         <span className="error-message">{emailError}</span>
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="password">Password:</label>
    //         <input * 
               type="password"
    //           id="password"
    //           placeholder="Enter your password"
    //           value={password}
    //           onChange={handlePasswordChange}
    //           required
    //         />
    //         <span className="error-message">{passwordError}</span>
    //       </div>
    //       <button className="login-button" type="submit" disabled={isButtonDisabled}>
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div> */}

   
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

//ori
// import { useState } from 'react';
// import './Login.css';
// import { Link ,useNavigate} from 'react-router-dom';
// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
// const navigate=useNavigate();
//   const validateLogin = () => {
//     if (username === 'admin@gmail.com' && password === 'admin@123') {
//       setErrorMessage(''); 
//       navigate('/')
//       alert('Login successful!');
//     } else {
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-background">
//       <div className="login-container">
//         <div className="login-form">
//           <h2 className="login-heading"> Admin Login</h2>
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
//           <Link to="/dash">
//           <button className="login-button" type="button" onClick={validateLogin}>
//             Login
//             </button> </Link>
//         </div>
//         <p id="error-message">{errorMessage}</p>
//       </div>
//     </div></div>
//   );
// };

// export default Login;
