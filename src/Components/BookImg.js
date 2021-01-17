import React from "react";
import "../Styles/BookImg.css";

export default function BookImg(props) {
  return (
    <div className="BookImg">
      <img src={props.url} alt="Book cover" />
    </div>
  );
}
