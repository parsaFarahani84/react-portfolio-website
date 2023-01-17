import React from "react";
import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="container header__container">
          <h5>Hello i'm</h5>
          <h1>Parsa Farahani</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src="/images/nnn.png" alt="me" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
