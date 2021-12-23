import React from "react";
import "./Counter.css";

function Counter({ counter, icon, type }) {
  return (
    <div className={`counter ${type}`}>
      <i className={`counter-icon fas ${icon}`}></i>
      <span className="counter-value">{counter}</span>
    </div>
  );
}

export default Counter;
