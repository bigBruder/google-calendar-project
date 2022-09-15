import React, { useState, useEffect } from 'react';
import './modal.scss';
import moment from 'moment';

const Modal = props => {
  const [state, setState] = useState({
    date: '',
    startTime: '',
    endTime: '',
    title: '',
  });

  const handleChange = event => {
    event.stopPropagation();
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  // const eventObj = { ...countEventDates(date, startTime, endTime), title };
  // console.log(eventObj.dateFrom, eventObj.dateTo, eventObj.title);
  // console.log(JSON.stringify(eventObj.dateFrom, eventObj.dateTo, eventObj.title));

  const { date, startTime, endTime, title } = state;
  console.log(date);
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={props.closeForm}>
            +
          </button>
          <form className="event-form">
            <input
              value={title}
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                value={date}
                type="date"
                name="date"
                className="event-form__field"
                onChange={handleChange}
              />
              <input
                value={startTime}
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleChange}
              />
              <span>-</span>
              <input
                value={endTime}
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button
              type="submit"
              className="event-form__submit-btn"
              onClick={e => {
                e.preventDefault();
                props.handleSubmit(date, startTime, endTime, title);
              }}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
