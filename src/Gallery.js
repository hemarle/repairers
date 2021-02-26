import React from "react";
import "./Gallery.css";
import GalleryContent from "./GalleryContent";
import image from "./images/churchbg.jpg";
import { useStateValue } from "./StateProvider";
function Gallery() {
  const [{ GALLERY }, dispatch] = useStateValue();

  return (
    <div className="gallery">
      <div className="gallery__content">
        {GALLERY.map(({ imageUrl, date, title }) => (
          <GalleryContent image={imageUrl} date={date} title={title} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
