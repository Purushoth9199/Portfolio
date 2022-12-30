import React from "react";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
} from "./HomeElements";
import Video from "../../Images/video7.mp4";
function HeroSection() {
  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeBg>

      <HomeContent>
        <HomeH1>Purushothaman S.K.R </HomeH1>
        <HomeP>
          I'm a passionate{" "}
          <span style={{ borderBottom: "3px solid green" }}>Full Stack Developer</span>{" "}
          based in Tamil Nadu
        </HomeP>
        <span className="float-left">
          <a
            href="https://github.com/Purushoth9199"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-github"></i>
          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/purushothaman-ravichandran-22579925a/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          &emsp;
        </span>
      </HomeContent>
    </HomeContainer>
  );
}

export default HeroSection;
