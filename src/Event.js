import React from "react";
import "./Event.css";
import image2 from "./images/program2.jpg";
import image1 from "./images/program1.png";
import image3 from "./images/prog3.jpg";
import image4 from "./images/prog4.jpg";
import Title from "./Title";

function Event() {
  return (
    <div className="event">
      <Title title="Upcoming Events" />
      <div className="event__container">
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
      </div>
    </div>
  );
}

export default Event;
