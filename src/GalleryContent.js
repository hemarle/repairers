import React from "react";
import "./GalleryContent.css";

import image from "./images/churchbg.jpg";
function GalleryContent() {
  return (
    <div className="galleryContent">
      <img src={image} />
      <div className="galleryContent__text">
        <h3>
          The Love Fest <span>21/02/2020</span>
        </h3>
      </div>
    </div>
  );
}

export default GalleryContent;
