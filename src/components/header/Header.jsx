import React from "react";
import "./header.css";
import ResumeSection from "./ResumeSection";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";

function Header() {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Shubham Saurav</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <ResumeSection />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
