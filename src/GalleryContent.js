import React from "react";
import "./GalleryContent.css";

function GalleryContent({ image, title, date }) {
  return (
    <div className="galleryContent">
      <img src={image} />
      <div className="galleryContent__text">
        <h5>
          {title}
          <span>{date}</span>
        </h5>
      </div>
    </div>
  );
}

export default GalleryContent;
