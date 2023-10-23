import React from 'react';
import "./about.css";
import ProfileImg from "../../assets/profile.jpg";
import Resume from "../../assets/Resume_10-23.pdf";
import Info from "./Info";

const About = () => {
  return (
      <section className="about section" id="about">
          <h2 className="section_title">About Me</h2>
          <span className="section_subtitle">Introduction</span>

          <div className="about_container container grid">
              <img src={ProfileImg} alt="" className="about_img" />
              <div className="about_data">
                <Info />
                  <p className="about_description"></p>
                  <a download="" href={Resume} className="button button--flex">Download Resume</a>
              </div>
          </div>
      </section>
  )
}

export default About