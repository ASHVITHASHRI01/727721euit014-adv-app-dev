// import React from 'react'
import './Admin.css'
import zenyoga from '../pics/zenyogaa.png'

const Admin = () => {
  return (
    <div className="background-container">
    <div className="page-container">
    <div className="center-container">
    <img src={zenyoga} width='50%' height='50%'/>
      {/* <img src="your_image_url.jpg" alt="AstralZen Logo" className="logo" /> */}
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
