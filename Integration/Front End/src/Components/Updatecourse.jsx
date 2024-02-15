// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './AddCourse.css';
// // import axios from 'axios'; // Import the CSS file

// const Updatecourse = () => {
//   const [courseName, setCourseName] = useState('');
//   const [courseDuration, setCourseDuration] = useState('');
//   const [courseFee, setCourseFee] = useState('');

//   const handleAddCourse = async (e) => {
//     e.preventDefault();

//     // try {
//     //   const token = localStorage.getItem('token');
//     //   if (!token) {
//     //     console.error('Token not found. Please log in again.');
//     //     // Handle the absence of token, e.g., redirect to login page
//     //     return;
//     //   }

//     //   const response = await axios.post(
//     //     'http://localhost:8080/course',
//     //     {
//     //       coursename: courseName,
//     //       duration: courseDuration,
//     //       fee: courseFee,
//     //     },
//     //     {
//     //       headers: {
//     //         Authorization: `Bearer ${token}`, // Corrected syntax for setting Authorization header
//     //       },
//     //     }
//     //   );

//     //   // Handle successful response, if needed
//     //   console.log('Course added successfully:', response.data);

//     //   // Clear the form fields after successful submission
//     //   setCourseName('');
//     //   setCourseDuration('');
//     //   setCourseFee('');
//     // } catch (error) {
//     //   // Handle error, if needed
//     //   console.error('Error adding course:', error);
//     // }
//   };

//   return (
//     <div className='addimg'>
//         <Link to="/courses">
//             <button className="back-button">Back</button>
//           </Link>
//       <div className='movecourse'>
//         <div className="add-course-container">
//           <h2>Update Course</h2>
//           <form onSubmit={handleAddCourse}>
//             <label className="form-label">
//               Course Name:
//               <input
//                 type="text"
//                 value={courseName}
//                 onChange={(e) => setCourseName(e.target.value)}
//                 className="form-input"
//               />
//             </label>
//             <label className="form-label">
//               Course Duration:
//               <input
//                 type="text"
//                 value={courseDuration}
//                 onChange={(e) => setCourseDuration(e.target.value)}
//                 className="form-input"
//               />
//             </label>
//             <label className="form-label">
//               Course Fee:
//               <input
//                 type="text"
//                 value={courseFee}
//                 onChange={(e) => setCourseFee(e.target.value)}
//                 className="form-input"
//               />
//             </label>
//             <button type="submit" className="form-button">
//               Update Course
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Updatecourse;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './AddCourse.css';
// import axios from 'axios'; 

// const Updatecourse = () => {
//     const [courseName, setCourseName] = useState('');
//   const [duration, setDuration] = useState('');
//   const [fees, setFees] = useState('');
//   // const [location, setLocation] = useState('');
//   // const [description, setDescription] = useState('');
//   const [error, setError] = useState(null);

//   const handleAddAcademy = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setError('Token not found. Please log in again.');
//         return;
//       }

      
//         const response = await axios.put(
//         `http://localhost:8080/api/v1/auth/courses`,

//         // `http://localhost:8080/api/v1/auth/${courseName}`,
//         {
//           name: courseName,
//           duration: duration,
//           fees: fees,
//           // location: location,
//           // description: description,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log('Academy Updated successfully:', response.data);

//       setCourseName('');
//       setDuration('');
//       setFees('');
//       // setLocation('');
//       // setDescription('');
//       setError(null); // Clear any previous errors
//     } catch (error) {
//       setError('Error updating course: ' + error.message);
//     }
//   };
// //   const [academyName, setAcademyName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [location, setLocation] = useState('');
// // //   const [phone, setPhone] = useState('');

// //   const handleAddAcademy = async (e) => {
// //     e.preventDefault();

//     // try {
//     //   const token = localStorage.getItem('token');
//     //   if (!token) {
//     //     console.error('Token not found. Please log in again.');
//     //     // Handle the absence of token, e.g., redirect to login page
//     //     return;
//     //   }

//     //   const response = await axios.post(
//     //     'http://localhost:8080/academy',
//     //     {
//     //       academyName,
//     //       email,
//     //       location,
//     //       description,
//     //       phone,
//     //     },
//     //     {
//     //       headers: {
//     //         Authorization: `Bearer ${token}`, // Corrected syntax for setting Authorization header
//     //       },
//     //     }
//     //   );

//     //   // Handle successful response, if needed
//     //   console.log('Academy added successfully:', response.data);

//     //   // Clear the form fields after successful submission
//     //   setAcademyName('');
//     //   setEmail('');
//     //   setLocation('');
//     //   setDescription('');
//     //   setPhone('');
//     // } catch (error) {
//     //   // Handle error, if needed
//     //   console.error('Error adding academy:', error);
//     // }
// //   };

//   return (
//     <div className='addimg'>
//       <Link to="/courses">
//         <button className="back-button">Back</button>
//       </Link>
//       <div className='movecourse'>
//         <div className="add-course-container">
//           <h2>Update Academy</h2>
//           <form onSubmit={handleAddAcademy}>
//             <label className="form-label">
//               Course Name:
//               <input
//                 type="text"
//                 value={courseName}
//                 onChange={(e) => setCourseName(e.target.value)}
//                 className="form-input"
//               />
//             </label>
//             <label className="form-label">
//               Duration:
//               <input
//                 type="text"
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//                 className="form-input"
//               />
//             </label>

//             <label className="form-label">
//               Fees:
//               <input
//                 type="text"
//                 value={fees}
//                 onChange={(e) => setFees(e.target.value)}
//                 className="form-input"
//               />
//             </label>

//             <button type="submit" className="form-button">
//               Update Academy
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Updatecourse;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddCourse.css';

const Updatecourse = () => {
  const [courseName, setCourseName] = useState('');
  const [duration, setDuration] = useState('');
  const [fees, setFees] = useState('');
  const [error, setError] = useState(null);

  const handleAddCourse = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Token not found. Please log in again.');
        return;
      }
  
      console.log('Authentication token:', token); // Log the authentication token
  
      const response = await axios.put(
        `http://localhost:8080/api/v1/auth/courses/${courseName}`, // Ensure the URL includes the username
        {
          name: courseName,
          duration: duration,
          fees: fees,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('Course updated successfully:', response.data);
  
      setCourseName('');
      setDuration('');
      setFees('');
      setError(null); // Clear any previous errors
    } catch (error) {
      if (error.response.status === 403) {
        setError('You are not authorized to perform this action.');
      } else {
        console.error('Error updating course:', error); // Log other errors
        setError('Error updating course. Please try again later.');
      }
    }
  };
  
  
  return (
    <div className='addimg'>
      <Link to="/courses">
        <button className="back-button">Back</button>
      </Link>
      <div className='movecourse'>
        <div className="add-course-container">
          <h2>Update Course</h2>
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleAddCourse}>
            <label className="form-label"> Course Name:
              <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} className="form-input" />
            </label>

            <label className="form-label">
               Duration:
              <input type="duration" value={duration}  onChange={(e) => setDuration(e.target.value)} className="form-input"  />
            </label>

            <label className="form-label">
             Fees:
              <input type="text" value={fees} onChange={(e) => setFees(e.target.value)} className="form-input" />
            </label>

            <button type="submit" className="form-button">
              Update course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updatecourse;