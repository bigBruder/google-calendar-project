import React from 'react';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  const margin = '-15px';
  const radius = '50%';
  const backgroundColor = '#0000ff';
  const size = '40px';
  const center = 'center';
  const red = '#ff0000';

  const currentDayStyle = {
    paddingBottom: '-15px',
    height: size,
    width: size,
    color: red,
    background: backgroundColor,
    borderRadius: radius,
    textAlign: center,
  };

  const today = new Date();
  const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div key={dayDate} className="calendar__day-label day-label">
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span
            className="day-label__day-number"
            {...(dayDate === currentDate
              ? {
                  style: {
                    color: red,
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

export default Navigation;
