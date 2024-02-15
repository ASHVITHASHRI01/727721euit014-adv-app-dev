// import './Academy.css';
// import { useState } from 'react';
// import logoo from '../pics/logoo.png';

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
//     // Perform validation before adding the academy
//     if (!academyData.name || !academyData.email || !academyData.location) {
//       console.log('Please fill in all required fields.');
//       return;
//     }

//     // Logic to add the academy
//     console.log('Academy added:', academyData);

//     // Reset the form fields after adding the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });
//   };

//   const handleUpdate = () => {
//     // Perform validation before updating the academy
//     if (!selectedAcademy) {
//       console.log('Please select an academy to update.');
//       return;
//     }

//     // Logic to update the selected academy with the data from academyData
//     const updatedAcademy = {
//       ...selectedAcademy,
//       name: academyData.name,
//       email: academyData.email,
//       location: academyData.location,
//       description: academyData.description,
//       phoneNumber: academyData.phoneNumber
//     };

//     console.log('Academy updated:', updatedAcademy);

//     // Reset the form fields after updating the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });

//     // Reset the selected academy
//     setSelectedAcademy(null);
//   };

//   const handleDelete = () => {
//     // Perform validation before deleting the academy (if needed)
//     if (!selectedAcademy) {
//       console.log('Please select an academy to delete.');
//       return;
//     }

//     // Logic to delete the academy
//     console.log('Academy deleted:', selectedAcademy);

//     // Reset the form fields after deleting the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });

//     // Reset the selected academy
//     setSelectedAcademy(null);
//   };

//   // Function to handle selecting an academy
//   const handleSelectAcademy = (academy) => {
//     setSelectedAcademy(academy);
//     setAcademyData(academy); // Populate the form fields with the selected academy's data
//   };

//   return (
//     <div className="dash-container">
//       <header>
//         <div className="logo">
//           <img src={logoo}></img>
//         </div>
//         <nav>
//           <div className='home-book'> 
//             <div className="dropdown">
//               <button id="menuButton" className="dropbtn">Menu</button>
//               <div className="dropdown-content">
//                 <a href="http://localhost:5173/dash">Home</a>
//                 <a href=" http://localhost:5173/academy">Academy</a>
//                 <a href=" /courses">Courses</a>
//                 <a href="http://localhost:5173/people">Enrollments</a>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <div className="addcourse-background"></div>
//       <div className="container">
//         <h2>Academy Form</h2>
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
//         <form>
//           <div className="form-field">
//             <label htmlFor="name" className="field-label">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={academyData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-field">
//             <label htmlFor="email" className="field-label">Email:</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={academyData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-field">
//             <label htmlFor="location" className="field-label">Location:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="location"
//               name="location"
//               value={academyData.location}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-field">
//             <label htmlFor="description" className="field-label">Description:</label>
//             <textarea
//               className="form-control"
//               id="description"
//               name="description"
//               value={academyData.description}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-field">
//             <label htmlFor="phoneNumber" className="field-label">Phone Number:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={academyData.phoneNumber}
//               onChange={handleChange}
//             />
//           </div>  
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Academy;



import './Courses.css'
import logoo from '../pics/logoo.png';
import { Link } from 'react-router-dom';
const Academy = () => {
  const handleAddCourse = () => {
    // Implement add course functionality
    console.log('Adding course...');
  };

  const handleUpdateCourse = () => {
    // Implement update course functionality
    console.log('Updating course...');
  };

  const handleDeleteCourse = () => {
    // Implement delete course functionality
    console.log('Deleting course...');
  };

  return (
    <div className="dash-container">
      <header>
        <div className="logo">
          <img src={logoo}></img>
        </div>
        <nav>
          <div className='home-book'> 
            <div className="dropdown">
              <button id="menuButton" className="dropbtn">Menu</button>
              <div className="dropdown-content">
                <a href="http://localhost:5173/dash">Home</a>
                <a href=" http://localhost:5173/academy">Academy</a>
                <a href=" http://localhost:5173/courses">Courses</a>
                <a href="http://localhost:5173/people">Enrollments</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    <div style={{ textAlign: 'center' }}>
      <h1>Academy Management</h1>
      <br></br>
      <Link to="/addacademy">
      <button  style={{ marginRight: '10px' }} onClick={handleAddCourse}>Add Academy</button></Link>
      <Link to="/upacademy">
      <button   style={{ marginRight: '10px' }} onClick={handleUpdateCourse}>Update Academy</button></Link>
      <Link to="/dlacademy">
              <button onClick={handleDeleteCourse}>Delete Academy</button></Link>
    </div>

    </div>
  );
};

export default Academy;

// import './Academy.css';
// import { useState } from 'react';
// import logoo from '../pics/logoo.png';

// const Academy = () => {
//   const [academyData, setAcademyData] = useState({
//     name: '',
//     email: '',
//     location: '',
//     description: '',
//     phoneNumber: ''
//   });

//   const [selectedAcademy, setSelectedAcademy] = useState(null);
//   const [showUpdateForm, setShowUpdateForm] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAcademyData({
//       ...academyData,
//       [name]: value
//     });
//   };

//   const handleAdd = () => {
//     // Logic to add the academy
//     console.log('Academy added:', academyData);

//     // Reset the form fields after adding the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });
//   };
//   const handleUpdate = () => {
//     // Perform validation before updating the academy
//     if (!selectedAcademy) {
//       console.log('Please select an academy to update.');
//       return;
//     }
  
//     // Logic to update the academy with the data from academyData
//     const updatedAcademy = {
//       ...selectedAcademy,
//       name: academyData.name,
//       email: academyData.email,
//       location: academyData.location,
//       description: academyData.description,
//       phoneNumber: academyData.phoneNumber
//     };
  
//     console.log('Academy updated:', updatedAcademy);
  
//     // Reset the form fields after updating the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });
  
//     // Hide the update form after updating
//     setShowUpdateForm(false);
//   };
  
//   // const handleUpdate = () => {
//   //   // Logic to update the academy
//   //   console.log('Academy updated:', selectedAcademy);
//   //   console.log('Updated details:', academyData);

//   //   // Reset the form fields after updating the academy
//   //   setAcademyData({
//   //     name: '',
//   //     email: '',
//   //     location: '',
//   //     description: '',
//   //     phoneNumber: ''
//   //   });

//   //   // Hide the update form after updating
//   //   setShowUpdateForm(false);
//   // };

//   const handleDelete = () => {
//     // Logic to delete the academy
//     console.log('Academy deleted:', selectedAcademy);

//     // Reset the form fields after deleting the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });

//     setSelectedAcademy(null);
//   };

//   return (
//     <div className="dash-container">
//       <header>
//         <div className="logo">
//           <img src={logoo} alt="Logo"></img>
//         </div>
//         <nav>
//           <div className='home-book'>
//             <div className="dropdown">
//               <button id="menuButton" className="dropbtn">Menu</button>
//               <div className="dropdown-content">
//                 <a href="http://localhost:5173/dash">Home</a>
//                 <a href="http://localhost:5173/academy">Academy</a>
//                 <a href="http://localhost:5173/courses">Courses</a>
//                 <a href="http://localhost:5173/people">Enrollments</a>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <div className="addcourse-background"></div>
//       <div className="container">
//         <h2>Academy Form</h2>
//         <div className="button-container">
//           <button type="button" className="btn btn-primary" onClick={handleAdd}>
//             Add
//           </button>
//           <button type="button" className="btn btn-success" onClick={() => setShowUpdateForm(true)}>
//             Update
//           </button>
//           <button type="button" className="btn btn-danger" onClick={handleDelete}>
//             Delete
//           </button>
//         </div>
//         <form>
//           <div className="form-field">
//             <label htmlFor="name" className="field-label">Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={academyData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-field">
//             <label htmlFor="email" className="field-label">Email:</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={academyData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-field">
//             <label htmlFor="location" className="field-label">Location:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="location"
//               name="location"
//               value={academyData.location}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-field">
//             <label htmlFor="description" className="field-label">Description:</label>
//             <textarea
//               className="form-control"
//               id="description"
//               name="description"
//               value={academyData.description}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-field">
//             <label htmlFor="phoneNumber" className="field-label">Phone Number:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={academyData.phoneNumber}
//               onChange={handleChange}
//             />
//           </div>
//           {showUpdateForm && (
//             <div>
//               <h3>Update Form</h3>
//               <div className="form-field">
//                 <label htmlFor="updateName" className="field-label">Name:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="updateName"
//                   name="updateName"
//                   value={selectedAcademy ? selectedAcademy.name : ''}
//                   disabled
//                 />
//               </div>
//               <div className="form-field">
//                 <label htmlFor="updateLocation" className="field-label">Location:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="updateLocation"
//                   name="updateLocation"
//                   value={selectedAcademy ? selectedAcademy.location : ''}
//                   disabled
//                 />
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Academy;


//correct raa
// import './Academy.css';

// import { useState } from 'react';
// import logoo from '../pics/logoo.png';

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
//     // Perform validation before adding the academy
//     if (!academyData.name || !academyData.email || !academyData.location) {
//       console.log('Please fill in all required fields.');
//       return;
//     }

//     // Logic to add the academy
//     console.log('Academy added:', academyData);

//     // Reset the form fields after adding the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });
//   };

//   const handleUpdate = () => {
//     // Perform validation before updating the academy
//     if (!selectedAcademy) {
//       console.log('Please select an academy to update.');
//       return;
//     }

//     // Logic to update the academy
//     console.log('Academy updated:', selectedAcademy);
//     console.log('Updated details:', academyData);

//     // Reset the form fields after updating the academy
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
//     // Perform validation before deleting the academy (if needed)
//     if (!selectedAcademy) {
//       console.log('Please select an academy to delete.');
//       return;
//     }

//     // Logic to delete the academy
//     console.log('Academy deleted:', selectedAcademy);

//     // Reset the form fields after deleting the academy
//     setAcademyData({
//       name: '',
//       email: '',
//       location: '',
//       description: '',
//       phoneNumber: ''
//     });

//     setSelectedAcademy(null);
//   };

//   // Function to handle selecting an academy
//   // const handleSelectAcademy = (academy) => {
//   //   setSelectedAcademy(academy);
//   // };

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
//                 <a href=" http://localhost:5173/academy">Academy</a>
//                 <a href=" http://localhost:5173/courses">Courses</a>
//                 <a href="http://localhost:5173/people">Enrollments</a>
//             </div>
//           </div>
//          </div>
//       </nav>
//     </header>
//     <div className="addcourse-background"></div>
//     <div className="container">
//       <h2>Academy Form</h2>
//       <div className="button-container">
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
//       <form>
//         <div className="form-field">
//           <label htmlFor="name" className="field-label">Academy ID:</label>
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
//           <label htmlFor="name" className="field-label">Name:</label>
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
//         {/* <div className="form-field">
//           <label htmlFor="description" className="field-label">Description:</label>
//           <textarea
//             className="form-control"
//             id="description"
//             name="description"
//             value={academyData.description}
//             onChange={handleChange}
//           />
//         </div> */}
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
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Academy;