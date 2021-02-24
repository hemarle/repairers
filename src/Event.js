import React from "react";
import "./Event.css";
import image2 from "./images/churchbg.jpg";
import Title from "./Title";

function Event() {
  return (
    <div className="event">
      <Title title="Upcoming Events" />
      <div className="event__container">
        <img src={image2} />
        <img src={image2} />
        <img src={image2} />
        <img src={image2} />
      </div>
    </div>
  );
}

export default Event;
