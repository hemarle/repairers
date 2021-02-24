import React, { useEffect, useState } from "react";
import image from "./images/imagebg.jpeg";
import "./SermonPost.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function SermonPost() {
  const id = useParams();
  const [{ SERMON, USER }, dispatch] = useStateValue();
  const [details, setDetails] = useState();

  useEffect(() => {
    SERMON.map((detail) =>
      detail._id == id.roomid ? setDetails(detail) : console.log("pass")
    );
  }, [SERMON]);
  console.log(details, "details");
  return (
    <div className="sermonPost">
      <div className="sermonPost__image">
        <img src={image} alt="sermon_image" />
      </div>
      <div className="sermonPost__body">
        {/* {SERMON.map((data) =>
          data._id === id.roomid ? setDetails(data) : console.log("Error", data)
        )} */}
        <h1 className="sermonPost__title">{details?.title}</h1>
        <div className="sermonPost__authorDate">
          <h3 className="sermonPost__author">Pastor {details?.author}</h3>
          <h6 className="sermonPost__date">{details?.date}</h6>
        </div>
        <p className="sermonPost__text">{details?.message}</p>
      </div>
    </div>
  );
}

export default SermonPost;
