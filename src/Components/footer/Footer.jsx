import React from "react";
import Github from "./Github.svg";
import LinkedIn from "./LinkedIn.svg";
import Twitter from "./Twitter.svg";
const Footer = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Sandesh Walunj</h2>
        <div>
          <img
            className="mx-2"
            style={{ cursor: "pointer" }}
            src={Github}
            alt="github.svg"
          />
          <img
            className="mx-2 pointer-cursor"
            style={{ cursor: "pointer" }}
            src={LinkedIn}
            alt="linked.svg"
          />
          <img
            className="mx-2 pointer-cursor"
            style={{ cursor: "pointer" }}
            src={Twitter}
            alt="twitter.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
