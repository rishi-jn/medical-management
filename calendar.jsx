import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const DetailedCalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      title: 'Booked Slot 1',
      start: new Date(2023, 5, 10, 10, 0, 0),
      end: new Date(2023, 5, 10, 11, 0, 0),
      booked: true,
    },
    {
      title: 'Booked Slot 2',
      start: new Date(2023, 5, 10, 13, 0, 0),
      end: new Date(2023, 5, 10, 14, 0, 0),
      booked: true,
    },
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const isSlotBooked = events.some(event => 
      (start >= event.start && start < event.end) ||
      (end > event.start && end <= event.end) ||
      (start <= event.start && end >= event.end)
    );

    if (isSlotBooked) {
      alert('This time slot is already booked.');
      return;
    }

    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        title,
        start,
        end,
        booked: true,
      };
      setEvents([...events, newEvent]);
    }
  };

  const eventPropGetter = (event) => {
    const style = {
      backgroundColor: event.booked ? 'red' : 'green',
      color: 'white',
    };
    return { style };
  };

  return (
    <div className=''>
      <h1>Detailed Calendar with Time Slots</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventPropGetter}
        views={['day', 'agenda']}
        step={30}
        timeslots={1}
        defaultView="day"
      />
    </div>
  );
};

export default DetailedCalendarComponent;