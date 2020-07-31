import React from "react";
import "./Portfolio.css";

import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="echild">
      <div className="cards">
        <div
          className="containers"
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <h4>
            <b>Programming Skills</b>
          </h4>
          <br />
          <p>
            <Link to="/experience1">show me</Link>
          </p>
        </div>
      </div>
      <div className="cards">
        <div
          className="containers"
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <h4>
            <b>DataBase Skills</b>
          </h4>
          <br />

          <p>
            <Link to="/experience2">show me</Link>
          </p>
        </div>
      </div>
      <div className="cards">
        <div
          className="containers"
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <h4>
            <b>WebDevelopment skills</b>
          </h4>
          <br />

          <p>
            <Link to="/experience3">show me</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
