import React from "react";
import Projects from "./Projects";
import Experience from "../Experience";
import "../Portfolio.css";
const Skill1 = () => {
  return (
    <div>
      <div className="nav">
        <a href="">
          karthick Portfolio
          <img
            width="20px"
            height="20px"
            src="https://lh3.googleusercontent.com/proxy/eSZoBQMhh7utBzenlUf1oh_0hGiNDZJkxX7gFuT0cPvCu0cc47N-eWqCCp77E4hXM30FdzW1pfgCcmiqMWVqcslXE3_0qt2TMrE-H39YCn-srWAble1tNUVJoD_PVGcazZZI4rnZziv6C1E"
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
        <h2 className="head">
          Welcome to <span style={{ color: "black" }}> Karthick</span> Kumar
          Portfolio Come And Explore
        </h2>

        <br />
      </div>
      <div className="div b " id="about">
        <h2 className="head">My Projects ~ Scroll Down</h2>
      </div>
      <div className="div c">
        <Projects />
      </div>

      <div className="div d " id="contact">
        <h2 className="head"> My Experinece ~ Scroll Down </h2>
      </div>
      <div className=" e">
        <Experience />
        <div className="box">
          <div className="skill J">
            <span className="float-left">javascript</span>
            70%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill bs">
            <span className="float-left">html css bootstrap</span>
            80%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill ja">
            <span className="float-left">java</span>
            60%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill p">
            <span className="float-left">python Basics</span>
            80%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill s">
            <span className="float-left">springboot</span>
            60%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill a">
            <span className="float-left">Angularjs</span>
            70%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill r">
            <span className="float-left">Reactjs</span>
            60%
          </div>
        </div>
        <br />
        <div className="box">
          <div className="skill n">
            <span className="float-left">Nodejs</span>
            60%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill1;
