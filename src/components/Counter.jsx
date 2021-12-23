import React from "react";
import "./Counter.css";

function Counter(props) {
  return (
    <div className="counter">
      <i className="counter-value fas fa-user-plus"></i>
      <span className="counter-value">0</span>
    </div>
  );
}

export default Counter;
