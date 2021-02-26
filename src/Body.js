import React from "react";
import "./Body.css";
import { Button } from "react-bootstrap";
import imgbg from "./images/churchbg.jpg";
import { useStateValue } from "./StateProvider";

function Body({ first }) {
  const [{ SERMON }] = useStateValue();
  return (
    <div className="body">
      <div className="body__main">
        {SERMON.slice(0, 3).map((serm) => (
          <div className="body__sermon">
            <div className="body__image">
              <img src={imgbg} width="470px" height="220px" />
            </div>
            <div className="body__content">
              <h2>{serm.title}</h2>
              <p>{serm.message.slice(0, 30)}...</p>
              <a className="btn btn-primary" href={`/sermons/${serm._id}`}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
