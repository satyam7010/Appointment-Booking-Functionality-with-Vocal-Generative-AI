import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { auth } from '../firebase';

const Dashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await axios.get('http://localhost:5000/doctors');
      setDoctors(response.data);
    };

    const fetchAppointments = async () => {
      const user = auth.currentUser;
      const response = await axios.get(`http://localhost:5000/appointments/${user.uid}`);
      setAppointments(response.data);
    };

    fetchDoctors();
    fetchAppointments();
  }, []);

  const bookAppointment = async () => {
    const user = auth.currentUser;
    const appointment = {
      doctor_id: selectedDoctor.id,
      patient_id: user.uid,
      date,
      time
    };

    try {
      await axios.post('http://localhost:5000/appointments', appointment);
      alert('Appointment booked successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Doctors</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index} onClick={() => setSelectedDoctor(doctor)}>{doctor.name}</li>
        ))}
      </ul>
      {selectedDoctor && (
        <div>
          <h3>Book Appointment with {selectedDoctor.name}</h3>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          <button onClick={bookAppointment}>Book Appointment</button>
        </div>
      )}
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.date} at {appointment.time} with {appointment.doctor_id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
