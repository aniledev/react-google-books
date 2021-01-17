import React, { Component } from "react";
import "../Styles/App.css";
import SiteHeader from "./SiteHeader";
import Form from "./Form";
import BookList from "./BookList";

export default class App extends Component {
  render() {
    // create sample test data
    const books = [
      {
        title: "Paradise",
        author: "Toni Morrison",
        price: "$20.00",
        description: "Great book description here",
        image_url: "http://www.greatbookwebsite.com",
      },
      {
        title: "Infinite Jest",
        author: "David Foster Wallace",
        price: "$20.00",
        description: "Great book description here",
        image_url: "http://www.greatbookwebsite.com",
      },
      {
        title: "Why the Caged Bird Sings",
        author: "Maya Angelou",
        price: "$20.00",
        description: "Great book description here",
        image_url: "http://www.greatbookwebsite.com",
      },
      {
        title: "Origin",
        author: "Dan Brown",
        price: "$20.00",
        description: "Great book description here",
        image_url: "http://www.greatbookwebsite.com",
      },
      {
        title: "Midnight Sun",
        author: "Stephanie Meyer",
        price: "$20.00",
        description: "Great book description here",
        image_url: "http://www.greatbookwebsite.com",
      },
      {
        title: "The Prophet",
        author: "Kahlil Gibran",
        price: "$20.00",
        description: "Great book description here",
        image_url: "http://www.greatbookwebsite.com",
      },
    ];

    return (
      <div className="App">
        <SiteHeader />
        <Form />
        <BookList books={books} />
      </div>
    );
  }
}
