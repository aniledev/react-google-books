import React from "react";
import "../Styles/BookInfo.css";
import BookImg from "./BookImg";

export default function BookInfo(props) {
  return (
    <div className="BookInfo">
      <div className="BookInfo_author">{props.author}</div>
      <div className="BookInfo_price">{props.price}</div>
      <div className="BookInfo_description">{props.description}</div>
    </div>
  );
}
