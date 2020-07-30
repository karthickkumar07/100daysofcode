import React from "react";
import Projects from "./Projects";
import Experience from "../Experience";
import "../Portfolio.css";

const Skill3 = () => {
  return (
    <div>
      <div className="nav">
        <a href="">
          karthick Portfolio
          <img
            width="20px"
            height="20px"
            src="https://lh3.googleusercontent.com/proxy/zEu_KHyXJ-W7JhvNQjbWlWv9s2IaBpOFUpTaHNOdgO_lSz8rDjgkaFINALp3zROt29D7Mt67XOizYU_2M1QoksPqufnV8CxdYg5u8SBdskFSSXF8mnzvcIURiLrYaiVgEMIs2NQINvGVJeo"
            alt=""
          />
        </a>
        <a href=""> Btech IT Graduate</a>
        <a href="https://github.com/karthickkumar07">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/karthick71198">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/karthick-kumar-b49a77129/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span className="tooltiptext">8610158524</span>
        </a>
        <a href="">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span className="tooltiptext mail">karthick71198kumar@gmail.com</span>
        </a>
        <div className="nav-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#about">Projects</a>

          <a href="#contact">Skills</a>
        </div>
      </div>

      <div className="div a" id="home">
        <h2>
          Welcome to <span style={{ color: "black" }}> Karthick</span> Kumar
          Portfolio Come And Explore
        </h2>

        <br />
      </div>
      <div className="div b" id="about">
        <h2>My Projects ~ Scroll Down</h2>
      </div>
      <div className="div c">
        <Projects />
      </div>

      <div className="div d" id="contact">
        <h2> My Experinece ~ Scroll Down </h2>
      </div>
      <div className=" e">
        <Experience />
        <div className="box">
          <div className="skill he">
            <span className="float-left">Heroku</span>
            90%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill fi">
            <span className="float-left">FireBase</span>
            80%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill ne">
            <span className="float-left">Netilfyu</span>
            90%
          </div>
        </div>

        <div className="box">
          <div className="skill post">
            <span className="float-left">PostMan</span>
            100%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill vs">
            <span className="float-left">Visual Studio code</span>
            100%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill robo">
            <span className="float-left">robo3t(robomongo)</span>
            90%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill xd">
            <span className="float-left">Adobe -XD</span>
            70%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill3;
