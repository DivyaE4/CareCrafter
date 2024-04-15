
import './Dermatologist.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
const Dermatologist = () => {
  const [users, setUsers] = useState([]);
  const [doctorName, setdoctorName] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:3001/getDermatologists')
      .then(response => {
        console.log(response.data);
        setUsers(response.data)})
      .catch(err => console.log(err));
  }, []);

  const handleClick = (userDoctorName) => {
    setdoctorName(userDoctorName);
    console.log(userDoctorName);
    navigate('./appointmentinfo/Appointmentinfo', { state: { doctorName: userDoctorName } });

  };


  if (users.length === 0) {
    return <div>Loading...</div>; // or display a message indicating no data
  }

  return (
    <div >
      <center><h1>Dermatologist info</h1></center>
      {/* <img src='https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' alt='not working'></img>
       */}
      <div className='card-container'>
        
        {users.map(user => (
          <div className="doctor-card" key={user._id}>
            
            <img src={user.url} alt='image'></img>
            <h2>{user.DoctorName}</h2>
            <p>Specialization: {user.Specialization}</p>
            <p>Degree: {user.Degree}</p>

            {/* <Link to="/appointmentinfo" className='card-link'>Click to book Appointment</Link> */}
            <Link to={`/appointmentinfo/${user.DoctorName}`} className='card-link' onClick={() => handleClick(user.DoctorName)}>
            Click to book Appointment
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dermatologist;

