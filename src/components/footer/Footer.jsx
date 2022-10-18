import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

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
        <a href="https://www.facebook.com/shubhamsauravft9">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/shubham_100rav/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Shubham_Saurav9">
          <IoLogoTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
