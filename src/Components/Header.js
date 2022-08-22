import React from "react";
import "../Styles/Header.scss";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <HighlightIcon />
      </div>
      <h1 className="header__name">ToDoList</h1>
    </header>
  );
}

export default Header;
