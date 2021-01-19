import React, { Component } from "react";
import "../Styles/Form.css";

export default class Form extends Component {
  // add a constructor to initialize state for controlled form component
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      printType: "All",
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

  bookTypeChanged(book) {
    this.setState({
      book,
    });
  }

  render() {
    return (
      <div className="Form">
        <form>
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
              >
                <option value="All" selected>
                  All
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
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
              >
                <option value="No Filter" selected>
                  No Filter
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
