import React from "react";
import Button from "./Button";
import "./Header.css"


function Header({ onAdd, showAdd }) {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        colour={showAdd ? "Red" : "Green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
        showAdd={showAdd}
      />
    </header>
  );
}

export default Header;
