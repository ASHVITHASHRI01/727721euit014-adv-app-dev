// import React from 'react'
import './Enroll.css'
const Enroll = () => {
  return (
    <div className="form-container">
    <div className="registration-form">
    <h2>Enrollment Form</h2>
    <form>
      <div className="form-group">
        <label htmlFor="firstName" className="label-white">First Name:</label>
        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
      </div>

      <div className="form-group">
        <label htmlFor="lastName" className="label-white">Last Name:</label>
        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
      </div>

      <div className="form-group">
        <label className="label-white">Gender:</label>
        <div className="radio-group">
            <label className="radio-label label-white">
            <input type="radio" name="gender" value="male" />
            Male
            </label>
            <label className="radio-label label-white">
            <input type="radio" name="gender" value="female" />
            Female
            </label>
        </div>
        </div>

      <div className="form-group">
        <label htmlFor="phoneNumber" className="label-white">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="label-white">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email address" />
      </div>

      <div className="form-group">
        <label htmlFor="age" className="label-white">Age:</label>
        <input type="number" id="age" name="age" placeholder="Enter your age" />
      </div>

      <div className="form-group">
        <label htmlFor="dob" className="label-white">Date of Birth:</label>
        <input type="date" id="dob" name="dob" />
      </div>

      <div className="address-group">
        <h3>Address</h3>
        <div className="form-group">
          <label htmlFor="houseNumber" className="label-white">House Number:</label>
          <input type="text" id="houseNumber" name="houseNumber" placeholder="Enter your house number" />
        </div>

        <div className="form-group">
          <label htmlFor="streetName" className="label-white">Street Name:</label>
          <input type="text" id="streetName" name="streetName" placeholder="Enter your street name" />
        </div>

        <div className="form-group">
          <label htmlFor="areaName" className="label-white">Area Name:</label>
          <input type="text" id="areaName" name="areaName" placeholder="Enter your area name" />
        </div>

        <div className="form-group">
          <label htmlFor="pincode" className="label-white">Pincode:</label>
          <input type="text" id="pincode" name="pincode" placeholder="Enter your pincode" />
        </div>

        <div className="form-group">
          <label htmlFor="state" className="label-white">State:</label>
          <input type="text" id="state" name="state" placeholder="Enter your state" />
        </div>

        <div className="form-group">
          <label htmlFor="nationality" className="label-white">Nationality:</label>
          <input type="text" id="nationality" name="nationality" placeholder="Enter your nationality" />
        </div>
      </div>

      <button type="submit">Enroll</button>
    </form>
  </div>
  </div>
  )
}

export default Enroll
