import React from 'react';
import PropTypes from 'prop-types';
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

Calendar.propTypes = {
  weekDates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  formVisibility: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Calendar;
