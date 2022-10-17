import React from "react";
import "./portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image"></div>
          <h3>This is a portfolio item title</h3>
          {/* <a href="#" className="btn">
            Github Link
          </a>
          <a href="#" className="bt btn-primary">
            Netlify Link
          </a> */}
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
