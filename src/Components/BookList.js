import React, { Component } from "react";
import "../Styles/BookList.css";
import Book from "./Book";

// create class component that takes in props of books={this.props.books} from App component
export default class BookList extends Component {
  render() {
    const bookComponents = this.props.books.map((book, i) => (
      <Book {...book} key={i} />
    ));
    return <div className="BookList">{bookComponents}</div>;
  }
}

// set default props for this component
BookList.defaultProps = {
  books: [],
};
