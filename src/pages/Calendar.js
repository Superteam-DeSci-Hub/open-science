import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';
import eventsData from '../data/eventsData';

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  // Function to change the month
  const changeMonth = (offset) => {
    const newDate = new Date(value.getFullYear(), value.getMonth() + offset, 1);
    setValue(newDate);
  };

  // Render event content inside calendar tiles
  const tileContent = ({ date }) => {
    const formattedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];

    const event = eventsData.find(d => d.date === formattedDate);

    return event ? (
      <div className="event-card">
        <a href={event.url} target="_blank" rel="noopener noreferrer" className="event-link">
        {event.name}
        </a>
        <p className="event-description">{event.status}</p>
      </div>
    ) : <div className="empty-card"></div>;
  };

  return (
    <div className="calendar-container">
      <h1>Upcoming Events</h1>

      {/* Custom Month Navigation with Single Arrows */}
      <div className="month-navigation">
        <button onClick={() => changeMonth(-1)} className="nav-button">‹</button>
        <span>{value.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={() => changeMonth(1)} className="nav-button">›</button>
      </div>

      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
        onActiveStartDateChange={({ activeStartDate }) => setValue(activeStartDate)}
      />
    </div>
  );
};

export default CustomCalendar;