// import './Bookanappointment.css';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
// // import Appointment from '../appointmentinfo/Appointmentinfo';
// import Appointment from '../appointmentinfo/Appointmentinfo';

// const BookAnAppointment = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/getNames')
//       .then(response => setUsers(response.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="appointment-container">
//       <h1>Appointment info</h1>
//       <div className="doctor-list">
//         {users.map(user => (
//           <div className="doctor-card" key={user._id}>
//             <img src={user.url} alt='image'></img>
//             <h2>{user.DoctorName}</h2>
//             <p>Specialization: {user.Specialization}</p>
//             <p>Degree: {user.Degree}</p>
//             {/* Link to the appointment info page */}
//             <Link to="/appointmentinfo" className='button-link'>Click to book Appointment</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookAnAppointment;

import './Bookanappointment.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookAnAppointment = () => {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    // Generate time slots for today onwards
    const currentTime = new Date();
    const timeSlotDuration = 30; // in minutes
    const totalSlots = 12; // number of slots per day
    let slots = [];

    for (let i = 0; i < totalSlots; i++) {
      const slotTime = new Date(currentTime.getTime() + i * timeSlotDuration * 60000);
      slots.push({
        time: slotTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        booked: false,
      });
    }

    setTimeSlots(slots);
  }, []);

  return (
    <div className="appointment-container">
      <h1>Available Time Slots</h1>
      <div className="time-slot-list">
        {timeSlots.map((slot, index) => (
          <div className={`time-slot ${slot.booked ? 'booked' : ''}`} key={index}>
            <p>{slot.time}</p>
            {!slot.booked && <Link to={`/appointmentinfo/${slot.time}`} className='button-link'>Book Appointment</Link>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookAnAppointment;
