
import './Courses.css'
import logoo from '../pics/logoo.png';
import { Link } from 'react-router-dom';
const Courses = () => {
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
                <a href=" http://localhost:5173/dash">Home</a>
                <a href=" http://localhost:5173/academy">Academy</a>
                <a href="http://localhost:5173/people">Enrollments</a>
                <a href="http://localhost:5173">LogOut</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    <div style={{ textAlign: 'center' }}>
      <h1>Course Management</h1>
      <br></br>
      <Link to="/addcourse">
      <button  style={{ marginRight: '10px' }} onClick={handleAddCourse}>Add Course</button></Link>
      <Link to="/updatecourse">
      <button   style={{ marginRight: '10px' }} onClick={handleUpdateCourse}>Update Course</button></Link>
      <Link to="/deletecourse">
              <button onClick={handleDeleteCourse}>Delete Course</button></Link>
    </div>

    </div>
  );
};

export default Courses;
