import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="my_image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Dedicated professional with 1 year of experience in Front-end
            development. <br></br> Proficient in HTML, CSS, JS and comprehensive
            knowledge of ReactJS and its core principles. <br></br> Currently
            looking for job opportunities as a Front End Developer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
