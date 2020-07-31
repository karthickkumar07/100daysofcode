import React from "react";
import "./Projects.css";
import "../Portfolio.css";

const Projects = () => {
  return (
    <div className="row">
      <div className="card">
        {/* <img src="" alt="Avatar" style={{ width: "100%" }} /> */}
        <div className="img1"></div>
        <div className="container">
          <h4 style={{ color: "blue" }}>Project Title</h4>
          <h4>
            <b> Peer To Peer File Transfer</b>
          </h4>
          <br />
          <h4 style={{ color: "blue" }}>Project Description</h4>
          <p>
            Direct communication and file transfer without the help of server
            using the webrtc technology
          </p>
          <br />
          <h4 style={{ color: "blue" }}>Technologies</h4>
          <p> 1. webrtc</p>
          <p> 2. Html,css,javascipt</p>
          <p> 3. Nodejs</p>
          <p>4.Handlebars,Express</p>
        </div>
      </div>
      <div className="card">
        {/* <img src="" alt="Avatar" style={{ width: "100%" }} />
         */}
        <div className="img2"></div>

        <div className="container">
          <h4 style={{ color: "blue" }}>Project Title</h4>

          <h4>
            <b>E-commerce Website</b>
          </h4>
          <br />
          <h4 style={{ color: "blue" }}>Project Description</h4>

          <p>
            Professional Online shopping Website with braintree payment system.{" "}
          </p>
          <br />
          <h4 style={{ color: "blue" }}>Technologies</h4>
          <p>1.MongoDb</p>
          <p>2.Express</p>
          <p>3.Reactjs</p>
          <p>4.Nodejs</p>
        </div>
      </div>
      <div className="card">
        {/* <img src="" alt="Avatar" style={{ width: "100%" }} /> */}
        <div className="img3"></div>

        <div className="container">
          <h4 style={{ color: "blue" }}>Project Title</h4>

          <h4>
            <b>Story Social App</b>
          </h4>
          <br />
          <h4 style={{ color: "blue" }}>Project Description</h4>

          <p>
            Public social where user have to google signin to enter the page and
            post his story and view public story as well as authors story
          </p>
          <br />
          <h4 style={{ color: "blue" }}>Technologies</h4>
          <p>1.MongoDb Atlas</p>
          <p>2.Express</p>
          <p>3.React</p>
          <p>4.Nodejs</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
