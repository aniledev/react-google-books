import React, { Component } from "react";
import "../Styles/Form.css";

export default class Form extends Component {
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
              required
            />
            <button type="submit">Get Books!</button>
          </div>
          <div className="Form_filters">
            <div className="Form_print">
              <label htmlFor="print-type">
                <strong>Print Type: </strong>
              </label>
              <select name="print-type" id="print-type">
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
              <select name="book-type" id="book-type">
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
