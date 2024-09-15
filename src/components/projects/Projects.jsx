import React from "react";
import "./projects.css";
import IMG1 from "../../assets/Portfolio.png";
import IMG2 from "../../assets/Musicplayer.png";
import IMG3 from "../../assets/eSwasthyaDham.png";
import IMG4 from "../../assets/Animebook.png";
import IMG5 from "../../assets/Recipe.png";
import IMG6 from "../../assets/Calculator.png";

function Projects() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Portfolio",
      github: "https://github.com/shubhamsaurav09/first-react-portfolio",
      demo: "https://shubham-saurav.netlify.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Music Player",
      github: "https://github.com/shubhamsaurav09/music-player-angular",
      demo: "https://angular-music-app-c698e.web.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "eSwasthyaDham",
      github: "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2032506",
      demo: "https://eswasthyadham.uk.gov.in/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Animebook (in progress)",
      github: "https://github.com/shubhamsaurav09/animebook",
      demo: "https://animebook-ft9.netlify.app/",
    },
    {
      id: 5,
      image: IMG5,
      title: "Recipe",
      github: "https://github.com/shubhamsaurav09/recipe",
      demo: "https://recipe-ft9.netlify.app/",
    },
    {
      id: 6,
      image: IMG6,
      title: "Calculator",
      github: "https://github.com/shubhamsaurav09/calculator",
      demo: "https://calculator-ft9.netlify.app/",
    },
  ];

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="projects_item">
              <div className="projects_item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="projects_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
