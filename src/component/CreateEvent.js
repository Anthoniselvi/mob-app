import React from "react";
import "./CreateEvent.css";

function CreateEvent() {
  return (
    <div className="create-container">
      <h1>Create New Event</h1>
      <form onSubmit={CreateEvent}>
        <div className="row">
          <label>Event Name: </label> <input type="text" />
        </div>
        <div className="row">
          <label>Date: </label> <input type="text" />
        </div>
        <div className="row">
          <label>Place: </label> <input type="text" />
        </div>
        <button class="event-button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
