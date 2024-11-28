import React from "react";
import "./StickyFooterBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const StickyFooterBar = () => {
  return (
    <div className="sticky-footer-bar">
      <button className="footer-button1">
        <span>Search</span>
      </button>
      <button className="footer-button2">Contact</button>
    </div>
  );
};

export default StickyFooterBar;
