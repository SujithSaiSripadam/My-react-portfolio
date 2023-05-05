import "./portfolio.css";

import IMG1 from "/Users/sujithsaisripadam/suji/src/assets/Screenshot 2022-12-09 at 8.22.23 PM.png";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Countdown till New Year with Javascript",
      img: IMG1,
      description:
        "This website is a coundown tracker for New Year .",
      technologies: "Html | CSS | Javascript ",
      link: " https://sujithsaisripadam.github.io/New-year-countdown.github.io/",
      github: "https://github.com/SujithSaiSripadam/New-year-countdown.github.io",
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
