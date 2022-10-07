import React from 'react';
import PropTypes from 'prop-types';
import './event.scss';

const Event = ({ height, marginTop, title, time, deleteEvent, id }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <button className="event__deleteBtn" onClick={() => deleteEvent(id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

Event.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.string,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Event;
