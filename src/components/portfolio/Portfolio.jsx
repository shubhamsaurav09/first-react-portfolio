import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Portfolio.png";
import IMG2 from "../../assets/Recipe.png";
import IMG3 from "../../assets/Calculator.png";
import IMG4 from "../../assets/Animebook.png";

function Portfolio() {
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
      title: "Recipe",
      github: "https://github.com/shubhamsaurav09/recipe",
      demo: "https://recipe-ft9.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Calculator",
      github: "https://github.com/shubhamsaurav09/calculator",
      demo: "https://calculator-ft9.netlify.app/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Animebook (in progress)",
      github: "https://github.com/shubhamsaurav09/animebook",
      demo: "https://animebook-ft9.netlify.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
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

export default Portfolio;
