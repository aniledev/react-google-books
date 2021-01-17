import React from "react";
import "../Styles/Book.css";
import BookTitle from "./BookTitle";
import BookInfo from "./BookInfo";
import BookImg from "./BookImg";

export default function Book(props) {
  return (
    <div className="Book">
      <BookTitle title={props.title} />
      <div className="Book_row">
        <BookImg url={props.image_url} />
        <BookInfo
          url={props.image_url}
          author={props.author}
          price={props.price}
          description={props.description}
        />
      </div>
      <div className="horizontal_rule">
        <hr align="right" />
      </div>
    </div>
  );
}
