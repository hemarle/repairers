import React from "react";
import "./Body.css";
import Sermon from "./Sermon.js";
import { Card, Button } from "react-bootstrap";
import imgbg from "./images/churchbg.jpg";
function Body({ first }) {
  return (
    <div className="body">
      <div className="body__main">
        <div className="body__sermon">
          <div className="body__image">
            <img src={imgbg} width="470px" height="220px" />
          </div>
          <div className="body__content">
            <h2>Joy of the Lamb</h2>
            <p>
              {" "}
              Jesus is the joy of the world. We can get to know more bnuysy
            </p>
            <Button>Read More</Button>
          </div>
        </div>
        <div className="body__sermon">
          <div className="body__image">
            <img src={imgbg} width="170px" height="120px" />
          </div>
          <div className="body__content">
            <h2>Joy of the Lamb</h2>
            <p>
              {" "}
              Jesus is the joy of the world. We can get to know more bnuysy
            </p>
            <Button>Read More</Button>
          </div>
        </div>
        <div className="body__sermon">
          <div className="body__image">
            <img src={imgbg} width="170px" height="120px" />
          </div>
          <div className="body__content">
            <h2>Joy of the Lamb</h2>
            <p>
              {" "}
              Jesus is the joy of the world. We can get to know more bnuysy
            </p>
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
