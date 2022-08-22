import React from "react";
import "../Styles/Footer.scss";

const date = new Date();

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
