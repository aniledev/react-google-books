import React, { Component } from "react";
import "../Styles/Form.css";

export default class Form extends Component {
  // add a constructor to initialize state for controlled form component
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      printType: "all",
      bookType: "",
    };
  }

  // write methods to update the state when each of the input values are changed
  searchChanged(search) {
    this.setState({
      search,
    });
  }

  printTypeChanged(printType) {
    this.setState({
      printType,
    });
  }

  bookTypeChanged(bookType) {
    this.setState({
      bookType,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const parameters = (({ search, printType, bookType }) => ({
      search,
      printType,
      bookType,
    }))(this.state);

    const URL = "https://www.googleapis.com/books/v1/volumes?";
    const options = {
      method: "GET",
      body: JSON.stringify(parameters),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer AIzaSyDcxqxraM3gEciVrsqWwQrpAlv5akq_dlk",
      },
    };

    fetch(URL, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then((data) => {
        this.props.updateBooks(data);
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="Form_search">
            <label htmlFor="search">
              <strong>Search: </strong>
            </label>
            <input
              type="text"
              placeholder="Enter book title"
              name="search"
              id="search"
              value={this.state.search}
              onChange={(e) => this.searchChanged(e.target.value)}
              required
            />
            <button type="submit">
              <strong>Get Books!</strong>
            </button>
          </div>
          <div className="Form_filters">
            <div className="Form_print">
              <label htmlFor="print-type">
                <strong>Print Type: </strong>
              </label>
              <select
                name="print-type"
                id="print-type"
                value={this.state.printType}
                onChange={(e) => this.printTypeChanged(e.target.value)}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
              </select>
            </div>
            <div className="Form_book">
              <label htmlFor="book-type">
                <strong>Book Type: </strong>
              </label>
              <select
                name="book-type"
                id="book-type"
                value={this.state.bookType}
                onChange={(e) => this.bookTypeChanged(e.target.value)}
              >
                <option value="" selected>
                  No Filter
                </option>
                <option value="partial">Partial</option>
                <option value="full">Full</option>
                <option value="ebooks">eBooks</option>
                <option value="free-ebooks">Free eBooks</option>
                <option value="paid-ebooks">Paid eBooks</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
