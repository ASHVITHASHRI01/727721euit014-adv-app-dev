// import './People.css'
// import logoo from '../pics/logoo.png'
// import ppl from '../pics/ppl.jpg'
// const People = () => {
//   return (
//     <div className="back-container">
//     <div className="people-container">
//     <header>
//       <div className="logo">
//         <img src={logoo}></img>
//       </div>
      

//       <nav>
//         <div className='home-book'> 
//         <div className="dropdown">
//             <button id="menuButton" className="dropbtn">Menu</button>
//             <div className="dropdown-content">
//             <a href="http://localhost:5173/dash">Home</a>
//                 <a href=" http://localhost:5173/academy">Academy</a>
//                 <a href=" http://localhost:5173/courses">Courses</a>
//                 <a href="http://localhost:5173/">LogOut</a>
//             </div>
//           </div>
//          </div>
//       </nav>
//     </header>
//     <div className='pbg'>
//   <img src={ppl}></img>
// </div>
// <div className="container1">
//           Container 1
//         </div>
//         <div className="container2">
//           Container 2
//         </div>
//     </div>
//     </div>
//   )
// }

// export default People


// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import './People.css'
// // import './CoursesPage.css'

// const People = () => {
//   const [servicesData, setServicesData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []); // Fetch data when the component mounts

//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem('token');
  
//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to the login page
//         return;
//       }
  
//       const response = await axios.get(`http://localhost:8080/api/v1/auth`, {
//         headers: {
//           Authorization: `Bearer ${token}`,  // Wrap in backticks
//         },
//       });
  
//       console.log('Fetched data:', response.data);
  
//       // Update the state with the fetched data
//       setServicesData(response.data);
//     } catch (error) {
//       console.error('Fetching data failed:', error);
//       // Handle the error, e.g., show an error message
//     }
//   };
  
//   // const fetchData = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');
  
//   //     if (!token) {
//   //       console.error('Token not found. Please log in again.');
//   //       // Handle the absence of token, e.g., redirect to the login page
//   //       return;
//   //     }
  
//   //     const response = await axios.get('http://localhost:8080/add', {
//   //       headers: {
//   //         Authorization: Bearer ${token},  // Wrap in backticks
//   //       },
//   //     });
  
//   //     console.log('Fetched data:', response.data);
  
//   //     // Update the state with the fetched data
//   //     setServicesData(response.data);
//   //   } catch (error) {
//   //     console.error('Fetching data failed:', error);
//   //     // Handle the error, e.g., show an error message
//   //   }
//   // };
  
//   return (
//     <div className='adminback'>
//       <div className='viewback'>
//         <div className="views">
//           <section id="view">
//             <center>
//               <h2 className='h2ad'>View Academy</h2>
//             </center>
//             <table className='admintable'>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phonenumber</th>
//                   <th>Location</th>
//                   <th>Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {servicesData.map((service, index) => (
//                   <tr key={index}>
//                     <td>{service.name}</td>
//                     <td>{service.email}</td>
//                     <td>{service.phonenumber}</td>
//                     <td>{service.location}</td>
//                     <td>{service.description}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default People;
import { useState, useEffect } from 'react';
import axios from 'axios';
import './People.css';

const People = () => {
  const [servicesData, setServicesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(token)
      if (!token) {
        setError('Token not found. Please log in again.');
        return;
      }

      const response = await axios.get("http://localhost:8080/api/v1/auth/form", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Fetched data:', response.data);

      // Update the state with the fetched data
      setServicesData(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Fetching data failed:', error);
      setError('Fetching data failed. Please try again.'); // Set a generic error message
    }
  };

  return (
    <div className='adminback'>
      <div className='viewback'>
        <div className="views">
          <section id="view">
            <center>
              <h2 className='h2ad'>View Enrollments</h2>
            </center>
            {error && <p className="error-message">{error}</p>}
            <table className='admintable'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Phonenumber</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Date of Birth</th>
                  <th>House Number</th>
                  <th>Street Name</th>
                  <th>State</th>
                  <th>Pincode</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr key={index}>
                    <td>{service.name}</td>
                    <td>{service.gender}</td>
                    <td>{service.phone}</td>
                    <td>{service.email}</td>
                    <td>{service.age}</td>
                    <td>{service.date}</td>
                    <td>{service.house}</td>
                    <td>{service.street}</td>
                    <td>{service.state}</td>
                    <td>{service.pincode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default People;
