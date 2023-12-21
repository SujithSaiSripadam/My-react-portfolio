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
          Hello! I am Sujith, a pre-final year undergraduate student at NIT Rourkela, Rourkela, India majoring in Chemical Engineering. I am a Computer vision and A.I. Enthusiast and I try to devote maximum of my time towards increasing my knowledge and contributing to the research in domains of Computer Vision and Deep Learning.
My research interests are inclined towards SLAM, Perception, NeRF, Pose Estimation, Object Recognition, Object Detection, 3D Image reconstruction and 3D vision.
With the projects and research I am currently doing, I am trying to gain maximum knowledge and achieve complete understanding of visual world!
I am involved in various research teams working in computer vision, deep learning and cross domain tasks with involve building deep learning models. I previously had a research experience in building computer vision models for a NAO Robot. I’ve made the mode to deliver 20% better performance than the standard YOLO model.
These experiences helped me being more interested and keen towards research and developing better Computer vision models.
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
