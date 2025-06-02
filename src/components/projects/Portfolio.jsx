import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "MBU Website",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur at necessitatibus optio. Id ratione culpa quidem, voluptate odit...",
      link: "https://rajagopal-mbu-website.netlify.app/"
    },
    {
      title: "Music Player",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur at necessitatibus optio. Id ratione culpa quidem, voluptate odit... symptoms using AI + NFT",
      link: "https://rajagopal-music.netlify.app/"
    },
    {
      title: "AI Chatbot",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur at necessitatibus optio. Id ratione culpa quidem, voluptate odit... Travelling Plan depending on your intrests",
      link: "https://rajagopal-music.netlify.app/"
    }
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__container">
        {projects.map((project, index) => (
          <div className="portfolio__item" key={index}>
            <h3 className="portfolio__title">{project.title}</h3>
            <p className="portfolio__desc">{project.description}</p>
            <a href={project.link} className="portfolio__button" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
