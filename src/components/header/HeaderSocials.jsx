import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/shubhamsauravft9/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/shubhamsaurav09" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/shubham_100rav/" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
