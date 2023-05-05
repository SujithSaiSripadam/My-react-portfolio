import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/me.png'



const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Sujith Sai" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Graduation</h5>
              <small>Chemical Engineering</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2 Completed Projects</small>
            </article>
          </div>
          <p>
          I am a highly motivated student of chemical engineering and a passionate tech enthusiast with a diverse skill set. I possess expertise in programming languages like C++, C, and Python, and good at front-end development. My strong willpower and determination set me apart, and I have a keen desire to learn and grow in my field.My technical skills extend beyond chemical engineering, and I have a solid foundation in programming. I am proficient in C++, C, and Python and can develop complex algorithms, applications, and software solutions. 
          .However, my greatest asset is my sheer willpower and determination. I possess a strong work ethic and  committed to achieving my goals. I am willing to put in the effort and time required to learn new skills and overcome challenges.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
