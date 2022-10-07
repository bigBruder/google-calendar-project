import React from 'react';
import PropTypes from 'prop-types';
import './week.scss';
import Day from '../day/Day';

const Week = ({ weekDates, events, deleteEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 23, 59);
        //getting all events from the day we will render
        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            deleteEvent={deleteEvent}
            dayEvents={dayEvents}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Week;
