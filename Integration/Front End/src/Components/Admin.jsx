// import { useState } from 'react';
// import axios from 'axios';
// import zenyoga from '../pics/zenyogaa.png';

// const Admin = () => {
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('YOUR_LOGIN_ENDPOINT', {
//         email: loginEmail,
//         password: loginPassword
//       });

//       if (loginEmail === 'admin@gmail.com' && loginPassword === 'Admin@123') {
//         window.location.href = '/ahome'; // Redirect to admin home
//       } else if (response.data.role === 'ADMIN') { 
//         window.location.href = '/ahome'; // Redirect to admin home
//       } else {
//         window.location.href = '/uhome'; // Redirect to user home
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div className="background-container">
//       <div className="page-container">
//         <div className="center-container">
//           <img src={zenyoga} width='50%' height='50%' alt="AstralZen Logo" />
//           <h1>AstralZen</h1>
//           <br />
//           <div className="buttons-container">
//             <a href="/ladmin" className="button">Admin</a>
//             <a href="/login" className="button">User</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;


// original

import './Admin.css'
import zenyoga from '../pics/zenyogaa.png'
// import { useNavigate } from 'react-router-dom';

const Admin = () => {
//   const navigate=useNavigate();
//   const [loginData, setLoginData]=useState({
//     "loginEmail":"",
//     "loginPassword":""
// });

//   if (loginEmail === 'admin@gmail.com' && loginPassword === 'Admin@123') {
//     navigate('/ahome');
//   } else if (response.data.role === 'ADMIN') { 
//     navigate('/ahome');
//   } else {
//     navigate('/uhome');
//   }

  return (
    <div className="background-container">
    <div className="page-container">
    <div className="center-container">
    <img src={zenyoga} width='50%' height='50%'/>
      <h1>AstralZen</h1>
      <br></br>
      <div className="buttons-container">
        <a href="/ladmin" className="button">Admin</a>
        <a href="/login" className="button">User</a>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Admin
