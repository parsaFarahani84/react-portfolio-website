import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: "./images/j1.webp",
    title: "Crypto Currency Dashboard & Financial Visualizeation",
    github: "hhtps://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    image: "./images/j2.webp",
    title: "Charts templates & infographics in Figma lalalala",
    github: "hhtps://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    image: "./images/j3.webp",
    title: "Figma dashboard UI kit for data design web apps",
    github: "hhtps://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 4,
    image: "./images/j4.webp",
    title: "Maintaining tasks and tracking progress lalalala",
    github: "hhtps://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 5,
    image: "./images/j5.webp",
    title: "Charts templates & infographics in Figma lalalala",
    github: "hhtps://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 6,
    image: "./images/j6.webp",
    title: "Charts templates & infographics in Figma lalalala",
    github: "hhtps://github.com",
    demo: "https://dribbble.com",
  },
];
function Portfolio() {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta ">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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
