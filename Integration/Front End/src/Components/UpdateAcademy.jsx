import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddCourse.css';
import axios from 'axios'; 

const UpdateAcademy = () => {
    const [academyName, setAcademyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleAddAcademy = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Token not found. Please log in again.');
        return;
      }

      
        const response = await axios.put(
        `http://localhost:8080/api/v1/auth/${academyName}`,
        {
          name: academyName,
          email: email,
          phonenumber: phone,
          location: location,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Academy Updated successfully:', response.data);

      setAcademyName('');
      setEmail('');
      setPhone('');
      setLocation('');
      setDescription('');
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Error adding academy: ' + error.message);
    }
  };
//   const [academyName, setAcademyName] = useState('');
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState('');
// //   const [phone, setPhone] = useState('');

//   const handleAddAcademy = async (e) => {
//     e.preventDefault();

    // try {
    //   const token = localStorage.getItem('token');
    //   if (!token) {
    //     console.error('Token not found. Please log in again.');
    //     // Handle the absence of token, e.g., redirect to login page
    //     return;
    //   }

    //   const response = await axios.post(
    //     'http://localhost:8080/academy',
    //     {
    //       academyName,
    //       email,
    //       location,
    //       description,
    //       phone,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`, // Corrected syntax for setting Authorization header
    //       },
    //     }
    //   );

    //   // Handle successful response, if needed
    //   console.log('Academy added successfully:', response.data);

    //   // Clear the form fields after successful submission
    //   setAcademyName('');
    //   setEmail('');
    //   setLocation('');
    //   setDescription('');
    //   setPhone('');
    // } catch (error) {
    //   // Handle error, if needed
    //   console.error('Error adding academy:', error);
    // }
//   };

  return (
    <div className='addimg'>
      <Link to="/academy">
        <button className="back-button">Back</button>
      </Link>
      <div className='movecourse'>
        <div className="add-course-container">
          <h2>Update Academy</h2>
          <form onSubmit={handleAddAcademy}>
            <label className="form-label">
              Academy Name:
              <input
                type="text"
                value={academyName}
                onChange={(e) => setAcademyName(e.target.value)}
                className="form-input"
              />
            </label>
            <label className="form-label">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </label>
            <label className="form-label">
              Phone:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input"
              />
            </label>
            <label className="form-label">
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-input"
              />
            </label>
            <label className="form-label">
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-input"
              />
            </label>

            <button type="submit" className="form-button">
              Update Academy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAcademy;
