import React from 'react';
import PropTypes from 'prop-types';
import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  const today = new Date();
  const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const currentDayStyle = {
    height: '40px',
    width: '40px',
    paddingTop: '8px',
    color: '#fff',
    background: '#0000ff',
    borderRadius: '50%',
    textAlign: 'center',
  };

  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div key={dayDate} className="calendar__day-label day-label">
          <span
            className="day-label__day-name"
            style={{ color: dayDate.getDate() == currentDate.getDate() ? '#0000ff' : null }}
          >
            {days[dayDate.getDay()]}
          </span>
          <span
            className="day-label__day-number"
            {...(dayDate.getDate() === currentDate.getDate()
              ? {
                  style: {
                    ...currentDayStyle,
                  },
                }
              : null)}
          >
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Navigation;
