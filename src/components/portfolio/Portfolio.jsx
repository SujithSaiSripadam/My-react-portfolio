import "./portfolio.css";

import IMG1 from "../../assets/Screenshot 2022-12-09 at 8.22.23 PM.png";

import NAO from "../../assets/NAO.jpeg";

import MI from "../../assets/MI.gif";

import NUM from "../../assets/NUM.gif";

import CNN from "../../assets/CNN.webp";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [

    {
      id: 1,
      title: "Realtime Face Detection",
      IMG1: MI,
      description:
        "This is a project based for Face detection in realtime. ",
      technologies: "Python | OpenCv | Face Detection", 
      link: "https://github.com/SujithSaiSripadam/Face-Detection",
      github: "https://github.com/SujithSaiSripadam/Face-Detection",
    
    },

    {
      id: 1,
      title: "Object Detection for NAO Robot",
      IMG1: NAO,
      description:
        "This is a project based on object detection for NAO Robot",
      technologies: "Python | PyTorch | Object Detection", 
    
    },

    {
      id: 2,
      title: "Pneumonia Detection",
      IMG1: CNN,
      description:
        "This is a project on Pneumonia detection from chest X-Rays using Convolution Neural Networks.",
      technologies: "Python | Tensorflow | Deep Learning", 
      link: "https://github.com/SujithSaiSripadam/Kaggle_Files/blob/main/pneumonia-prediction-using-cnn%20(1).ipynb",
      github: "https://github.com/SujithSaiSripadam/Kaggle_Files/blob/main/pneumonia-prediction-using-cnn%20(1).ipynb",
    
    },

    {
      id: 3,
      title: "MNIST : Handwritten Digit Recognition",
      IMG1: NUM,
      description:
        "This is a project on identifying Handwritten Digits using Convolution Neural Networks.",
      technologies: "Python | Pytorch | Deep Learning", 
      link: "https://github.com/SujithSaiSripadam/Deep_Learning/blob/main/Neural_Networks_Logistic_Reg_.ipynb",
      github: "https://github.com/SujithSaiSripadam/Deep_Learning/blob/main/Neural_Networks_Logistic_Reg_.ipynb",
    
    },

    {
      id: 4,
      title: "Java Script Project",
      IMG1: IMG1,
      description:
        "This website is a coundown tracker for New Year .",
      technologies: "Html | CSS | JS",
      link: "https://sujithsaisripadam.github.io/New-year-countdown.github.io/",
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
              {(
                <img src={pro.IMG1} alt={pro.title} />
              )}
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
