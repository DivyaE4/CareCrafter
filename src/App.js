import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './about/About';
import Contact from './contact/Contact'
import Login from './login/Login';
import BookAnAppointment from './bookanappointment/Bookanappointment';
import Cardiologist from './doctorsinfo/cardiologists/Cardiologist';
import Doctor from './doctors/Doctor';
import './App.css';
import Dermatologist from './doctorsinfo/dermatologists/Dermatologist';
import Neurologist from './doctorsinfo/neurologists/Neurologist';
import Oncologist from './doctorsinfo/oncologist/Oncologist'
import Opthalmologist from './doctorsinfo/opthalmologists/Opthalmologist';
import Orthopedic from './doctorsinfo/orthopedics/Orthopedic';
import Pediatrician from './doctorsinfo/pediatricians/Pediatrician';
import AppointmentInfo from './appointmentinfo/Appointmentinfo';
import Yourappointment from './yourappointment/Yourappointment';
const App = () => {
  return ( 
    <Router>
      <div className="app-container">
        <Sidebar />

        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bookanappointment" element={<BookAnAppointment />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/cardiologist" element={<Cardiologist />} />
            <Route path="/dermatologist" element={<Dermatologist />} />
            <Route path="/neurologist" element={<Neurologist />} />
            <Route path="/oncologist" element={<Oncologist />} />
            <Route path="/opthalmologist" element={<Opthalmologist />} />
            <Route path="/orthopedic" element={<Orthopedic />} />
            <Route path="/pediatrician" element={<Pediatrician />} />
            <Route path="/appointmentinfo/:doctorName" element={<AppointmentInfo />} />
            <Route path="/yourappointment" element={<Yourappointment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


//contact
//login
//book an appointment
//customer review
export default App;
