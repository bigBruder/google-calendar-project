import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import {
  getWeekStartDate,
  generateWeekRange,
  nextWeek,
  previousWeek,
  months,
} from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [state, setState] = useState({
    weekStartDate: new Date(),
  });
  const previousWeekDates = () => {
    setState({
      weekStartDate: new Date(previousWeek(weekStartDate)),
    });
  };

  const nextWeekDates = () => {
    setState({
      weekStartDate: new Date(nextWeek(weekStartDate)),
    });
  };

  const currentWeekDates = () => {
    setState({
      weekStartDate: new Date(),
    });
  };

  const { weekStartDate } = state;
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        currentMonth={months[weekStartDate.getMonth()]}
        switchOnToday={currentWeekDates}
        switchOnNextWeek={nextWeekDates}
        switchOnPreviousWeek={previousWeekDates}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
