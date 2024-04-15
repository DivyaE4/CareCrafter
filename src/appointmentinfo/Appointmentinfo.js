
// const Appointment = () => {
//     //const navigate=useNavigate();
//     /*return (
//       <div className="sidebar">
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/bookanappointment">Book An Appointment</Link></li>
//         </ul>
//       </nav>
      
//       </div>
//     );*/
//     return(
//       <div>
//         <center><h2>Appointment info</h2></center>
        
//       </div>
//     )
//   };
  
//   export default Appointment;

// appointmentinfo.js
// import Cardiologist from '../doctorsinfo/cardiologists/Cardiologist';

// const AppointmentInfo = ({ doctorName }) => {
//   return (
//     <div>
//       <center>
//       <h1>Appointment Information</h1>
//       <p>Doctor Name: {doctorName}</p>
//       </center>
//     </div>
//   );
// };

// export default AppointmentInfo;

// import React from 'react';
// import { useLocation } from 'react-router-dom';





// appointmentinfo.js

// import React from 'react';
// import Cardiologist from '../doctorsinfo/cardiologists/Cardiologist';

// const AppointmentInfo = ({ doctorname }) => {
//   return (
//     <div>
//       <center>
//         <h1>Appointment Information</h1>
//         <p>Doctor Name: {doctorname}</p>
        
//       </center>
//     </div>
//   );
// };

// export default AppointmentInfo;
// import Cardiologist from "../doctorsinfo/cardiologists/Cardiologist";
// const AppointmentInfo = ({ state }) => {
//   const doctorname = state.doctorname;

//   return (
//     <div>
//       <h1>Appointment Information</h1>
//       <p>Doctor Name: {doctorname}</p>
//     </div>
//   );
// };

// export default AppointmentInfo;

// import React, { useEffect, useState } from 'react';
// const AppointmentInfo = ({ state }) => {
//   const [doctorname, setdoctorname] = useState('');

//   useEffect(() => {
//     setdoctorname(state.doctorname);
//   }, [state]);

//   return (
//     <div>
//       <h1>Appointment Information</h1>
//       <p>Doctor Name: {doctorname}</p>
//     </div>
//   );
// };

// export default AppointmentInfo;









// const AppointmentInfo = () => {
//   const location = useLocation();
  

//   // Check if location.state is not null before destructuring
//   const doctorName = location.state ? location.state.doctorName : null;
//   console.log("Doctor Name:",{doctorName});
//   // Render the component based on the presence of doctorName
//   return (
//     <div>
//       <h1>Appointment Information</h1>
//       <center>
//       {doctorName ? (
//         <p>Doctor's Name: {doctorName}</p>
//       ) : (
//         <p>Doctor's Name not available</p>
//       )}
//       {/* Rest of your component */}
//       </center>
//     </div>
//   );
// };

// export default AppointmentInfo;


// const AppointmentInfo = () => {
//   const location = useLocation();

//   // Check if location.state is not null before destructuring
//   const doctorName = location.state ? location.state.doctorName : null;
//   console.log("Doctor Name:",{doctorName});
//   // Render the component based on the presence of doctorName
//   return (
//     <div>
//       <h1>Appointment Information</h1>
//       <center>
//       {doctorName ? (
//         <p>Doctor's Name: {doctorName}</p>
//       ) : (
//         <p>Doctor's Name not available</p>
//       )}
//       {/* Rest of your component */}
//       </center>
//     </div>
//   );
// };

// export default AppointmentInfo;




// import React from 'react';


// const AppointmentInfo = () => {
  
//   // const location = useLocation();
//   // //const { doctorName } = props;
//   // const { doctorName } = location.state || {};
//   const { doctorName } = useParams();


//   console.log("Doctor Name:",{doctorName});
//   return (
//     <div>
//       <center>
//       <h1>Appointment Information</h1>
      
//         {doctorName ? (
//           <p>Doctor's Name: {doctorName}</p>
//         ) : (
//           <p>Doctor's Name not available</p>
//         )}
//         {/* Rest of your component */}
//       </center>
//     </div>
//   );
// };

// export default AppointmentInfo;


// import React from 'react';

// import { useParams } from 'react-router-dom';

// const AppointmentInfo = () => {
  
//   // const location = useLocation();
//   // //const { doctorName } = props;
//   // const { doctorName } = location.state || {};
//   const { doctorName } = useParams();


//   console.log("Doctor Name:",{doctorName});
//   return (
//     <div>
//       <center>
//       <h1>Appointment Information</h1>
      
//         {doctorName ? (
//           <p>Doctor's Name: {doctorName}</p>
//         ) : (
//           <p>Doctor's Name not available</p>
//         )}
//         {/* Rest of your component */}
//       </center>
//     </div>
//   );
// };

// export default AppointmentInfo;


import React, { useState } from 'react';
import './Appointmentinfo.css';
import { useParams } from 'react-router-dom';

function AppointmentForm() {

  const { doctorName } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await fetch('http://localhost:5000/submit-appointment', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  
  //     if (response.status === 200) {
  //       // Handle success, e.g., display a success message to the user
  //       console.log('Appointment saved successfully');
  //     } else {
  //       // Handle error, e.g., display an error message to the user
  //       console.error('An error occurred while saving the appointment');
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if the selected slot is already booked
    const isSlotBooked = timeSlots.some((appointment) => appointment.time === formData.time);
  
    if (isSlotBooked) {
      console.error('This slot is already booked. Please choose a different time.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/submit-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 200) {
        // Handle success, e.g., display a success message to the user
        console.log('Appointment saved successfully');
      } else if (response.status === 400) {
        const errorData = await response.json();
        console.error('Error while saving appointment:', errorData.error);
  
        // Display a popup message
        alert(errorData.error);
      } else {
        console.error('An error occurred while saving the appointment');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  const timeSlots = [
    '09:00 AM - 09:30 AM',
    '09:30 AM - 10:00 AM',
    '10:00 AM - 10:30 AM',
    '10:30 AM - 11:00 AM',
    
    '11:00 AM - 11:30 AM',
    '11:30 AM - 12:00 AM',
    '12:00 AM - 12:30 AM',
    '12:30 PM - 1:00 PM',

    '5:00 PM- 5:30 PM',
    '5:30 PM- 6:00 PM',
    '6:00 PM- 6:30 PM',
    '6:30 PM- 7:00 PM',

    '7:00 PM- 7:30 PM',
    '7:30 PM- 8:00 PM',
    '8:00 PM- 8:30 PM',
    '8:30 PM- 9:00 PM',
    // Add more time slots as needed
  ];
  

  return (
    <div>
    <center>
      <h1>Appointment Information</h1>
      
        {doctorName ? (
          <p>Doctor's Name: {doctorName}</p>
        ) : (
          <p>Doctor's Name not available</p>
        )}
        {/* Rest of your component */}
      </center>
    <div className="center-table">
      
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="date">Date:</label>
              </td>
              <td>
                {/* <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Date"
                /> */}
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  placeholder="Date"
                />

              </td>
            </tr>
            {/* <tr>
              <td>
                <label htmlFor="time">Time:</label>
              </td>
              <td>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="Time"
                />
              </td>
            </tr> */}
            <tr>
              <td>
                <label htmlFor="time">Time:</label>
              </td>
              <td>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Time</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="reason">Reason for appointment:</label>
              </td>
              <td>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Reason for appointment"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default AppointmentForm;


