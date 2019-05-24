import React from "react";

const Button = ({ onClick, text }) => (
  <div className="fourteen" onClick={onClick}>
    <div className="elong">
      <div className="first">
        <a href="#">{text}</a>
      </div>
      <div className="second">
        <a className="secondary" href="#">
          {text}
        </a>
      </div>
    </div>
  </div>
);

export default Button;
