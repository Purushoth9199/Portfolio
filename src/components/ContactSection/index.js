import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1 className="logo-text">Contact</h1>
      <div className="mail-contact mb-5">
        <h4 className="px-2">Expecting the call for my great career</h4>
        <a
          href="mailto:purushothaman619997@gmail.com"
          rel="noreferrer"
          className="btn btn-sm btn-success"
        >
           Hire Me
        </a>
      </div>
      <div className="mail-contact mb-5">
        <div className="contacts p-3 text-center">
          <i className="fad fa-envelope"></i> <span>purushothaman619997@gmail.com</span>
        </div>
        <div className="contacts p-3 text-center">
          <i className="fad fa-mobile-alt"></i> <span>+91 6380891895</span>
        </div>
        <div className="contacts p-3 text-center mb-3">
          <i className="fad fa-map-marker-alt"></i>{" "}
          <span>Neyveli, Cuddalore district , TamilNadu</span>
        </div>
      </div>
      <div className="footer mt-3">
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
        <span>Copyright © 2023. </span>&emsp;{" "}
        <span> All Rights Reserved by PURUSHOTHAMAN </span>
      </div>
    </div>
  );
}

export default Contact;
