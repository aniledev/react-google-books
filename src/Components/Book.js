import React, { Component } from "react";
import "../Styles/Book.css";
import BookTitle from "./BookTitle";
import BookInfo from "./BookInfo";
import BookImg from "./BookImg";

export default function Book(props) {
  return (
    <div className="Book">
      Individual Book Component
      <BookTitle title={props.title} />
      <BookInfo
        author={props.author}
        price={props.price}
        description={props.description}
      />
      <BookImg url={props.image_url} />
    </div>
  );
}
