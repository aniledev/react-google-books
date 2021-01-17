import React from "react";
import "../Styles/BookInfo.css";

export default function BookInfo(props) {
  return (
    <div className="BookInfo">
      <div className="BookInfo_author">
        <strong>Author: </strong>
        {props.author}
      </div>
      <div className="BookInfo_price">
        <strong>Price: </strong>
        {props.price}
      </div>
      <div className="BookInfo_description">
        <strong>Summary: </strong>
        {props.description}
      </div>
    </div>
  );
}
