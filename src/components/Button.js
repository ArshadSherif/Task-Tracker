import React from "react";
import "./Button.css"

function Button({ colour, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: colour,
      }}
      className="btn"
    >
      {text}
    </button>
  );
}

export default Button;
