import React, { useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../../components/modal/Modal';
import './calendar.scss';

const Calendar = props => {
  const { weekDates, handleSubmit, events, closeForm, formVisibility, deleteEvent } = props;

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          {formVisibility ? <Modal handleSubmit={handleSubmit} closeForm={closeForm} /> : null}
          <Sidebar />
          <Week weekDates={weekDates} deleteEvent={deleteEvent} events={events} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
