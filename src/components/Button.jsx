import React from "react";
import "./Button.css";

function Button({ icon, type, action }) {
  return (
    <button onClick={action} className={`button ${type}`}>
      <i className={`fas ${icon}`}></i>
    </button>
  );
}

export default Button;
