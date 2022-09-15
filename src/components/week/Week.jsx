import React from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events, deleteEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 23, 59);
        //getting all events from the day we will render
        const dayEvents = events.filter(event => {
          // console.log(new Date(event.dateFrom.setMonth(event.dateFrom.getMonth() - 1)));
          // console.log(event.dateTo);
          return event.dateFrom > dayStart && event.dateTo < dayEnd;
        });

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

export default Week;
