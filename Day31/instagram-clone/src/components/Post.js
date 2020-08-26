import React from "react";
import "../layouts/header.css";
const Post = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <img
              className="rounded-circle"
              width="40"
              height="40"
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/07/18/914055-849610-797891-smriti-1.jpg"
              alt=""
            />
            <h5>{}</h5>
            <h5 className="pl-3">Smriti mandhana</h5>
          </div>
        </div>
        <img
          width="725"
          height="600"
          src="https://resources.platform.iplt20.com/IPL/photo/2019/05/07/d0f8c972-068b-485d-8c2d-15f6bebf96d0/JR1.jpg"
          alt=""
        />
        <div className="row">
          <i className="fa fa-2x fa-heart-o para" aria-hidden="true"></i>
          <i className="fa fa-comment-o fa-2x para" aria-hidden="true"></i>
          <i className="fa fa-telegram fa-2x para" aria-hidden="true"></i>
          <i className="fa fa-bookmark-o fa-2x para1" aria-hidden="true"></i>
        </div>
        <p className="head">280 views</p>
        <p className="head1">
          <span1> Smriti.Mandana.official </span1>{" "}
          <span> Last Night Things 🥰 🥰 🥰</span>
        </p>
        <p className="head2" style={{ fontSize: "20px" }}>
          view all 88 comments
        </p>

        <p className="head1">
          <span1> karthick.spartan.04 </span1> <span> Awesome Yaar 😻 😻</span>
          <br />
        </p>
        <p className="head2">8 HOURS AGO</p>
        <div className="card-body"></div>
        <div className="card-footer ">
          <p className="head3">Add a comment</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
