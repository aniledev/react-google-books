import React, { Component } from "react";
import "../Styles/App.css";
import SiteHeader from "./SiteHeader";
import Form from "./Form";
import BookList from "./BookList";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <Form />
        <BookList />
      </div>
    );
  }
}
