import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddCourse.css';
import axios from 'axios'; // Import the CSS file

const DeleteAcademy = () => {
  const [academyName, setAcademyName] = useState('');
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState('');
//   const [phone, setPhone] = useState('');

  const handleAddAcademy = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      const response = await axios.delete(`http://localhost:8080/api/v1/auth/${academyName}`,

        {
          academyName,
        
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Corrected syntax for setting Authorization header
          },
        }
      );

      // Handle successful response, if needed
      console.log('Academy deleted successfully:', response.data);

      // Clear the form fields after successful submission
      setAcademyName('');
     
    } catch (error) {
      // Handle error, if needed
      console.error('Error adding academy:', error);
    }
  };

  return (
    <div className='addimg'>
      <Link to="/academy">
        <button className="back-button">Back</button>
      </Link>
      <div className='movecourse'>
        <div className="add-course-container">
          <h2>Delete Academy</h2>
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
            {/* <label className="form-label">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            </label> */}

            <button type="submit" className="form-button">
              Delete Academy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteAcademy;
