import React from "react";
import "./About.css";
import Me from "../../Images/man.jpg";
import { InfoContainer } from "./AboutElements";
function About() {
  return (
    <>
      <InfoContainer lightBg={false} id="about">
        <h1 className="logo-text text-center py-md-5 py-xs-5">About Me</h1>
        <div className="row">
          <div
            className="col-md-5 col-sm-12 mb-3  aboutImg"
            data-aos="fade-right"
          >
            <img src={Me} alt="my profile" />
          </div>
          <div className="col-md-6 col-sm-12" data-aos="fade-left">
            <p>
              I'm PURUSHOTHAMAN SKR , a passionate MERN stack developer with the goal of working on
              a project that solves problems with thoughtful UI design, creating
              intuitive, dynamic user experiences powered by strong backend. I can adapt onto any
              technology rapidly making myself flexible upon
              any tech stack . A passionate, diligent person
              who wants to learn continuously and I'm excited to be 
              at the deployment phase of my new career as a web developer .
            </p>

            <a
              className="btn btn-sm btn-primary mt-3"
              rel="noreferrer"
              href="https://drive.google.com/file/d/14cU-neaeZIWTYpIwHK4X7PCr475avCrb/view"
              target="_blank"
              download
            >
              My Resume <i className="fad fa-link"></i>
            </a>
          </div>
        </div>
      </InfoContainer>
    </>
  );
}

export default About;
