import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <ul className="permaLink">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/shubhamsauravft9/">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/shubham_100rav/">
          <RiInstagramFill />
        </a>
        <a href="https://www.facebook.com/shubhamsauravft9">
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
