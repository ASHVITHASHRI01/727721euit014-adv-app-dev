// import { useState } from 'react';
// import axios from 'axios';
// import './Enroll.css';

// const Enroll = () => {
//   const [name, setName] = useState('');
//   const [gender, setGender] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const [date, setDate] = useState('');
//   const [house, setHouse] = useState('');
//   const [street, setStreet] = useState('');
//   const [state, setState] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleNameChange = (e) => setName(e.target.value);
//   const handleGenderChange = (e) => setGender(e.target.value);
//   const handlePhoneChange = (e) => setPhone(e.target.value);
//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handleAgeChange = (e) => setAge(e.target.value);
//   const handleDateChange = (e) => setDate(e.target.value);
//   const handleHouseChange = (e) => setHouse(e.target.value);
//   const handleStreetChange = (e) => setStreet(e.target.value);
//   const handleStateChange = (e) => setState(e.target.value);
//   const handlePincodeChange = (e) => setPincode(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = { name, gender, phone, email, age, date, house, street, state, pincode };
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setErrorMessage('Token not found. Please log in again.');
//         return;
//       }

//       const response = await axios.post('http://localhost:8080/api/v1/auth/form/postform', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       console.log('Enrollment successful:', response.data);
//       // Clear the form after successful submission
//       setName('');
//       setGender('');
//       setPhone('');
//       setEmail('');
//       setAge('');
//       setDate('');
//       setHouse('');
//       setStreet('');
//       setState('');
//       setPincode('');
//       setErrorMessage('');
//     } catch (error) {
//       console.error('Error enrolling:', error);
//       setErrorMessage('Error enrolling: Please try again.');
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="registration-form">
//         <h2>Enrollment Form</h2>
//         {errorMessage && <div className="error">{errorMessage}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name" className="label-white">Name:</label>
//             <input type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={handleNameChange} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="gender" className="label-white">Gender</label>
//             <input type="text" id="gender" name="gender" placeholder="Enter gender" value={gender} onChange={handleGenderChange} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phone" className="label-white">Phone Number:</label>
//             <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={phone} onChange={handlePhoneChange} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email" className="label-white">Email:</label>
//             <input type="email" id="email" name="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="age" className="label-white">Age:</label>
//             <input type="number" id="age" name="age" placeholder="Enter your age" value={age} onChange={handleAgeChange} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="date" className="label-white">Date:</label>
//             <input type="date" id="date" name="date" value={date} onChange={handleDateChange} />
//           </div>

//           <div className="address-group">
//             <h3>Address</h3>
//             <div className="form-group">
//               <label htmlFor="house" className="label-white">House Number:</label>
//               <input type="text" id="house" name="house" placeholder="Enter your house number" value={house} onChange={handleHouseChange} />
//             </div>

//             <div className="form-group">
//               <label htmlFor="street" className="label-white">Street Name:</label>
//               <input type="text" id="street" name="street" placeholder="Enter your street name" value={street} onChange={handleStreetChange} />
//             </div>

//             <div className="form-group">
//               <label htmlFor="state" className="label-white">State:</label>
//               <input type="text" id="state" name="state" placeholder="Enter your state" value={state} onChange={handleStateChange} />
//             </div>

//             <div className="form-group">
//               <label htmlFor="pincode" className="label-white">Pincode:</label>
//               <input type="text" id="pincode" name="pincode" placeholder="Enter your pincode" value={pincode} onChange={handlePincodeChange} />
//             </div>
//           </div>

//           <button type="submit">Enroll</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Enroll;
// import React from 'react'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddCourse.css';

const Enroll = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState(null);

  const handleAddAcademy = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Token not found. Please log in again.');
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };

    const formData = {
      name,
      gender,
      phone,
      email,
      age,
      date,
      house,
      street,
      state,
      pincode
    };

    try {
      const response = await axios.post(`http://localhost:8080/api/v1/auth/form/postform`, formData, { headers });

      console.log('Enrolled successfully:', response.data);

      setName('');
      setGender('');
      setEmail('');
      setPhone('');
      setAge('');
      setDate('');
      setHouse('');
      setStreet('');
      setState('');
      setPincode('');
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Error adding academy: ' + error.message);
    }
  };
  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  // const [date, setDate] = useState('');
  // const [house, setHouse] = useState('');
  // const [street, setStreet] = useState('');
  // const [state, setState] = useState('');
  // const [pincode, setPincode] = useState('');
  // const [error, setError] = useState(null);

  // const handleAddAcademy = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const token = localStorage.getItem('token');
  //     if (!token) {
  //       setError('Token not found. Please log in again.');
  //       return;
  //     }

  //     const response = await axios.post( 'http://localhost:8080/postform',
  //       {
  //         name: name,
  //         gender: gender,
  //         phonenumber: phone,
  //         email: email,
  //         age: age,
  //         date: date,
  //         house: house,
  //         street: street,
  //         state: state,
  //         pincode: pincode,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     console.log('Enrolled successfully:', response.data);

  //     setName('');
  //     setGender('');
  //     setEmail('');
  //     setPhone('');
  //     setAge('');
  //     setDate('');
  //     setHouse('');
  //     setStreet('');
  //     setState('');
  //     setPincode('');
  //     setError(null); // Clear any previous errors
  //   } catch (error) {
  //     setError('Error adding academy: ' + error.message);
  //   }
  // };

  return (
    <div className='addimg'>
      <Link to="/courses">
        <button className="back-button">Back</button>
      </Link>
      <div className='movecourse'>
        <div className="add-course-container">
          <h2>Enrollment</h2>
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleAddAcademy}>
          <strong>
            <label className="form-label"> Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
            </label>

            <label className="form-label"> Gender
              <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} className="form-input" />
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
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Age:
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-input"
              />
            </label></strong>
<hr></hr>
<h3>Address</h3>

            <label className="form-label">
              House Number:
              <input
                type="text"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Street:
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              State:
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="form-input"
              />
            </label>

            <label className="form-label">
              Pincode:
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="form-input"
              />
            </label>

            <button type="submit" className="form-button">
              Enroll
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enroll;


