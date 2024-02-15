// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './AddCourse.css';
// // import axios from 'axios'; // Import the CSS file

// const AddCourse = () => {
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
//         <Link to="/courses"> <button className="back-button">Back</button> </Link>
//       <div className='movecourse'>
//         <div className="add-course-container">
//           <h2>Add New Course</h2>
//           <form onSubmit={handleAddCourse}>
//             <label className="form-label"> Course Name:
//               <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} className="form-input" />
//             </label>
//             <label className="form-label"> Course Duration:
//               <input type="text" value={courseDuration} onChange={(e) => setCourseDuration(e.target.value)} className="form-input" />
//             </label>
//             <label className="form-label"> Course Fee:
//               <input type="text" value={courseFee} onChange={(e) => setCourseFee(e.target.value)} className="form-input" />
//             </label>
//             <button type="submit" className="form-button">  Add Course </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCourse;


//last time
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddCourse.css';

const Addcourse = () => {
  const [courseName, setCourseName] = useState('');
  const [duration, setDuration] = useState('');
  const [fees, setFees] = useState('');
  // const [location, setLocation] = useState('');
  // const [description, setDescription] = useState('');
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
  
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/courses',
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
  
      console.log('Course added successfully:', response.data);
  
      setCourseName('');
      setDuration('');
      setFees('');
      setError(null); // Clear any previous errors
    } catch (error) {
      if (error.response.status === 403) {
        setError('You are not authorized to perform this action.');
      } else {
        console.error('Error adding course:', error); // Log other errors
        setError('Error adding course. Please try again later.');
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
          <h2>Add Course</h2>
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleAddCourse}>
            <label className="form-label"> Course Name:
              <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} className="form-input" />
            </label>

            <label className="form-label">
               Duration:
              <input type="duration" value={duration}  onChange={(e) => setDuration(e.target.value)} className="form-input"  />
            </label>

            {/* <label className="form-label">
               Fee:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input"
              />
            </label> */}
            <label className="form-label">
             Fees:
              <input type="text" value={fees} onChange={(e) => setFees(e.target.value)} className="form-input" />
            </label>
            {/* <label className="form-label">
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-input"
              />
            </label> */}
            <button type="submit" className="form-button">
              Add course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addcourse;


// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './AddCourse.css';
// import axios from 'axios'; // Import the CSS file

// const DeleteAcademy = () => {
//   const [courseName, setCourseName] = useState('');
//   const [duration, setDuration] = useState('');
//   const [fees, setFees] = useState('');
// //   const [phone, setPhone] = useState('');

//   const handleAddAcademy = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('Token not found. Please log in again.');
//         // Handle the absence of token, e.g., redirect to login page
//         return;
//       }

//       const response = await axios.delete(`http://localhost:8080/api/v1/auth/${courseName}`,

//         {
//           courseName,
//           duration,
//           fees,
        
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Corrected syntax for setting Authorization header
//           },
//         }
//       );

//       // Handle successful response, if needed
//       console.log('Course updated successfully:', response.data);

//       // Clear the form fields after successful submission
//       setCourseName('');
     
//     } catch (error) {
//       // Handle error, if needed
//       console.error('Error updating course:', error);
//     }
//   };

//   return (
//     <div className='addimg'>
//       <Link to="/courses">
//         <button className="back-button">Back</button>
//       </Link>
//       <div className='movecourse'>
//         <div className="add-course-container">
//           <h2>Delete Course</h2>
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
//               Duration
//               <input
//                 type="text"
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//                 className="form-input"
//               />
//             </label>

//             <label className="form-label">
//               Fees
//               <input
//                 type="text"
//                 value={fees}
//                 onChange={(e) => setFees(e.target.value)}
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

// export default DeleteAcademy;
