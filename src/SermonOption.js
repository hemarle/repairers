import React from "react";
import "./SermonOption.css";

import bg from "./images//churchbg.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function SermonOption({ id, message, author, date, imageUrl, title }) {
  return (
    <div className="sermonOption">
      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src={bg} />
        <Card.Body>
          <Card.Title class="sermonOption__title">{title}</Card.Title>
          <Card.Text>{message.slice(0, 50)} ...</Card.Text>
          <Button variant="primary" href={`/sermons/${id}`}>
            Read More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SermonOption;
