import React, { Component } from "react";
import "../Styles/Book.css";
import BookTitle from "./BookTitle";
import BookInfo from "./BookInfo";
import BookImg from "./BookImg";

export default class Book extends Component {
  render() {
    return (
      <div className="Book">
        <BookTitle />
        <BookInfo />
        <BookImg />
      </div>
    );
  }
}
