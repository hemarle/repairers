import React, { useEffect, useState } from "react";
import "./Sermon.css";
import SermonOption from "./SermonOption";
import db from "./firebase";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Pagination from "./Pagination";

function Sermon() {
  const [{ SERMON }] = useStateValue();

  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sermonsPerPage, setSermonsPerPage] = useState(3);

  //pagination logic
  const indexOfLastSermon = currentPage * sermonsPerPage;
  const indexOfFirstSermon = indexOfLastSermon - sermonsPerPage;
  const currentSermons = SERMON.slice(indexOfFirstSermon, indexOfLastSermon);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="sermon">
      <div className="sermon__body">
        {currentSermons.map(
          ({ _id, message, author, date, title, imageUrl }) => (
            <SermonOption
              id={_id}
              message={message}
              author={author}
              date={date}
              title={title}
              imageUrl={imageUrl}
            />
          )
        )}
      </div>
      <div className="sermon__pagination">
        <Pagination
          postsPerPage={sermonsPerPage}
          totalPosts={SERMON.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Sermon;
