// import { object } from "prop-types";

const events = [];

export default events;

const baseUrl = 'https://631bb8e04fa7d3264ca0d25d.mockapi.io/events';

export const createEvent = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      alert('Internal Server Error. Can not display events');
    }
  });

export const deleteEvent = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      alert('Internal Server Error. Can not display events');
    }
  });

export const fetchEventList = () => {
  return fetch(baseUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Internal Server Error. Can not display events');
    })
    .then(eventList =>
      eventList.map(event => {
        console.log(new Date(event.dateFrom));
        return {
          ...event,
          dateFrom: new Date(event.dateFrom),
          dateTo: new Date(event.dateTo),
        };
      }),
    );
};
