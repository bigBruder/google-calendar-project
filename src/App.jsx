import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { createEvent, deleteEvent, fetchEventList } from './gateway/gateway';
import { countEventDates, currentMonth } from '../src/utils/dateUtils.js';
import {
  getWeekStartDate,
  generateWeekRange,
  nextWeek,
  previousWeek,
} from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [state, setState] = useState({
    weekStartDate: new Date(),
    formVisibility: false,
    events: [],
  });

  const { weekStartDate, formVisibility, events } = state;

  const previousWeekDates = () => {
    setState({
      weekStartDate: new Date(previousWeek(weekStartDate)),
      formVisibility: false,
      events,
    });
  };

  const nextWeekDates = () => {
    setState({
      weekStartDate: new Date(nextWeek(weekStartDate)),
      formVisibility: false,
      events,
    });
  };

  const currentWeekDates = () => {
    setState({
      weekStartDate: new Date(),
      formVisibility: false,
      events,
    });
  };

  const closeForm = () => {
    setState({ formVisibility: false, weekStartDate, events });
  };

  const showForm = e => {
    e.preventDefault();
    setState({ formVisibility: true, weekStartDate, events });
  };

  const fetchEvents = () => {
    fetchEventList().then(eventsList =>
      setState({
        weekStartDate,
        formVisibility: false,
        events: eventsList,
      }),
    );
  };

  const handleSubmit = (date, startTime, endTime, title) => {
    console.log(date);
    createEvent({ ...countEventDates(date, startTime, endTime), title }).then(() => fetchEvents());
  };

  const deleteHandler = id => {
    deleteEvent(id).then(() => fetchEvents());
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        showForm={showForm}
        currentMonth={currentMonth(weekDates, weekStartDate)}
        switchOnToday={currentWeekDates}
        switchOnNextWeek={nextWeekDates}
        switchOnPreviousWeek={previousWeekDates}
      />
      <Calendar
        handleSubmit={handleSubmit}
        events={events}
        deleteEvent={deleteHandler}
        weekDates={weekDates}
        formVisibility={formVisibility}
        closeForm={closeForm}
      />
    </>
  );
};

export default App;
