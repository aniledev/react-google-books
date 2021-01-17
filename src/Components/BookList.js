import React, { Component } from "react";
import "../Styles/BookList.css";
import Book from "./Book";

export default class BookList extends Component {
  render() {
    return (
      <div className="BookList">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    );
  }
}
