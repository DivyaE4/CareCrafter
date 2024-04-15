import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Yourappointment = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/getappointmentinfo')
          .then(response => {
            setUsers(response.data);
          })
          .catch(err => console.log(err));
      }, []);
    return (
    <div>
        <center>
      <div className="Yourappointment-container">
        <h1>Your Appointment info</h1>
        <div className='card-container'>
        {users.map(user => (
          <div key={user._id}>
            
            <h2>{user.name}</h2>
            <p>Date: {user.date}</p>
            <p>Reason: {user.reason}</p>
          </div>
        ))}
      </div>
      </div>
      </center>
      </div>  
    );
  };

export default Yourappointment;