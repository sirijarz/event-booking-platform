import React, { useEffect, useState } from "react";
import BookEventButton from "./BookEventButton";
import "../App.css";

const API = "http://localhost:3001";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/events`)
      .then((response) => {
        return response.json();
      })
      .then((events) => {
        console.log(events);
        setEvents(events);
      })
      .catch(console.error);
  }, []);

  return (
    <ul className="EventList">
      {events.map((event) => (
        <li key={event._id}>
          <span>{event.name}</span>
          <BookEventButton eventId={event._id} />
          <br></br>
          {event.description}
        </li>
      ))}
    </ul>
  );
};

export default EventList;
