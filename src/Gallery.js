import React from "react";
import "./Gallery.css";
import GalleryContent from "./GalleryContent";
import image from "./images/churchbg.jpg";
import { useStateValue } from "./StateProvider";
function Gallery() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery__content">
        <GalleryContent />
        <GalleryContent />
        <GalleryContent />
        <GalleryContent />
        <GalleryContent />
        {console.log(state)}
      </div>
    </div>
  );
}

export default Gallery;
