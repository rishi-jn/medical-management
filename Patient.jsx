import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('Appointments');
  const [appointments, setAppointments] = useState([
    // Initial list of appointments
    {
      id: 1,
      title: 'Booked Slot 1',
      start: new Date(2023, 5, 10, 10, 0, 0),
      end: new Date(2023, 5, 10, 11, 0, 0),
      booked: true,
    },
    {
      id: 2,
      title: 'Booked Slot 2',
      start: new Date(2023, 5, 10, 13, 0, 0),
      end: new Date(2023, 5, 10, 14, 0, 0),
      booked: true,
    },
  ]);
  const [prescriptions, setPrescriptions] = useState([
    // Initial list of prescriptions
    { id: 1, date: '2023-06-01', doctor: 'Dr. Smith', medication: 'Ibuprofen', dosage: '200mg' },
    { id: 2, date: '2023-06-03', doctor: 'Dr. Jones', medication: 'Paracetamol', dosage: '500mg' },
  ]);

  const handleCancelAppointment = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  const handleBookAppointment = (slotInfo) => {
    const isSlotBooked = appointments.some(
      (event) =>
        (slotInfo.start >= event.start && slotInfo.start < event.end) ||
        (slotInfo.end > event.start && slotInfo.end <= event.end) ||
        (slotInfo.start <= event.start && slotInfo.end >= event.end)
    );

    if (isSlotBooked) {
      alert('This time slot is already booked.');
      return;
    }

    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        id: appointments.length + 1,
        title,
        start: slotInfo.start,
        end: slotInfo.end,
        booked: true,
      };
      setAppointments([...appointments, newEvent]);
    }
  };

  return (
    <div className="flex">
      <div className="h-screen w-64 bg-blue-300 text-black fixed flex flex-col">
        <div className="p-4">
          <h1 className="text-xl font-bold">Patient Dashboard</h1>
        </div>
        <nav className="mt-4 flex-grow">
          <ul>
            <li
              className={`px-4 py-2 hover:bg-gray-700 border-b-2 border-black cursor-pointer ${
                activeTab === 'Appointments' ? 'bg-gray-700 text-white' : ''
              }`}
              onClick={() => setActiveTab('Appointments')}
            >
              Appointments
            </li>
            <li
              className={`px-4 py-2 hover:bg-gray-700 border-b-2 border-black cursor-pointer ${
                activeTab === 'Prescriptions' ? 'bg-gray-700 text-white' : ''
              }`}
              onClick={() => setActiveTab('Prescriptions')}
            >
              Prescriptions
            </li>
          </ul>
        </nav>
      </div>
      <div className="ml-64 p-8 w-full">
        {activeTab === 'Appointments' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
            <Calendar
              localizer={localizer}
              events={appointments}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              selectable
              onSelectSlot={handleBookAppointment}
              eventPropGetter={(event, start, end, isSelected) => {
                const style = {
                  backgroundColor: event.booked ? '#1976d2' : '#388e3c', // Blue for booked slots, Green for available slots
                  borderRadius: '5px',
                  opacity: 0.8,
                  color: 'white',
                  border: '1px solid #1565c0',
                  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                };
                return { style };
              }}
            />
            <ul className="mt-4">
              {appointments.map((appointment) => (
                <li key={appointment.id} className="border-b py-2 flex justify-between">
                  <div>
                    <p>Date: {moment(appointment.start).format('YYYY-MM-DD')}</p>
                    <p>Time: {moment(appointment.start).format('HH:mm')} - {moment(appointment.end).format('HH:mm')}</p>
                    <p>Title: {appointment.title}</p>
                  </div>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleCancelAppointment(appointment.id)}
                  >
                    Cancel
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
        {activeTab === 'Prescriptions' && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Prescriptions</h2>
            <ul>
              {prescriptions.map((prescription) => (
                <li key={prescription.id} className="border-b py-2">
                  <p>Date: {prescription.date}</p>
                  <p>Doctor: {prescription.doctor}</p>
                  <p>Medication: {prescription.medication}</p>
                  <p>Dosage: {prescription.dosage}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
