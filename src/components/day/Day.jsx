import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';
import { countMinutes } from '../../../src/utils/dateUtils.js';

import './day.scss';

const Day = ({ dataDay, dayEvents, deleteEvent }) => {
  const minutesAmount = countMinutes();
  const [state, settate] = useState({ marginTop: minutesAmount });

  useEffect(() => {
    const intervalId = setInterval(() => {
      settate({
        marginTop: countMinutes(),
      });
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const { marginTop } = state;

  return (
    <div className="calendar__day" data-day={dataDay}>
      {dataDay === new Date().getDate() ? (
        <>
          <div className="cirkle" style={{ marginTop: `${marginTop - 4}px` }}></div>
          <div className="red-line" style={{ marginTop: `${marginTop}px` }}></div>
        </>
      ) : null}
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            deleteEvent={deleteEvent}
            hourEvents={hourEvents}
          />
        );
      })}
      {/* {dataDay === new Date().getDate() && thisTime === new Date().getHours() ? (
        <div className="red-line"></div>
      ) : null} */}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number,
  dayEvents: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Day;
