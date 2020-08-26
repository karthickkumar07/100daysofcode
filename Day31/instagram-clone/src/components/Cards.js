import React from "react";
import Post from "./Post";
import "../layouts/header.css";
const Cards = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-md-8 ">
            <h1></h1>
            <div className="container bg-light scrollmenu  ">
              <img
                width="130"
                height="100"
                className="rounded-circle mt-3 mb-2 pr-3 pl-3"
                src="https://static.toiimg.com/thumb/msid-69320562,imgsize-363138,width-800,height-600,resizemode-75/69320562.jpg"
                alt=""
              />

              <img
                width="130"
                height="100"
                className="rounded-circle mt-3 mb-2 pr-3 pl-3"
                src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/05/917625-820013-suresh-raina.jpg"
                alt=""
              />
              <img
                width="130"
                height="100"
                className="rounded-circle mt-3 mb-2 pr-3 pl-3"
                src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/07/18/914055-849610-797891-smriti-1.jpg"
                alt=""
              />
              <img
                width="130"
                height="100"
                className="rounded-circle mt-3 mb-2 pr-3 pl-3"
                src="https://upload.wikimedia.org/wikipedia/commons/d/df/Anandhi.png"
                alt=""
              />
              <img
                width="130"
                height="100"
                className="rounded-circle mt-3 mb-2 pr-3 pl-3"
                src="https://imagevars.gulfnews.com/2019/07/22/MS-Dhoni_16c1918e33b_large.jpg"
                alt=""
              />
              <img
                width="130"
                height="100"
                className="rounded-circle mt-3 mb-2 pr-3 pl-3"
                src="https://www.mumbailive.com/images/media/images/images_1571123221547_abdul_kalam.jpg?bg=c39474&crop=620%2C348.0701754385965%2C0%2Cnull&fit=crop&fitToScale=w%2C1368%2C768&h=768&height=400&w=1368&width=620"
                alt=""
              />
              <br />
              <div className="row">
                <p className="head1">Joseph kuruvila</p>
                <p className="head1">Raina sonu</p>
                <p className="head1">Smriti mandana</p>
                <p className="head1">Anandhi dolly</p>
                <p className="head1">Ms Dhoni singh</p>
                <p className="head1">APj sir</p>
              </div>
            </div>
            <br />
            <Post />
            <Post />
          </div>
          <div className="col col-md-4">
            <h1></h1>
            <div className="container ">
              <div className="row ml-3 mt-2">
                <img
                  width="80"
                  height="80"
                  src="https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg"
                  alt=""
                  className="rounded-circle"
                />
                <h4 className="ml-3 mt-4">karthick spartan</h4>
              </div>
              <br />
              <div className="row ml-0">
                <div className="col col-sm-9">
                  <h5>Suggestions For You</h5>
                  <br />
                  <div className="row">
                    <div className="col col-sm-2">
                      <img
                        width="50"
                        height="50"
                        className="rounded-circle"
                        src="https://upload.wikimedia.org/wikipedia/commons/d/df/Anandhi.png"
                        alt=""
                      />

                      <br />

                      <img
                        width="50"
                        height="50"
                        className="rounded-circle"
                        src="https://image.cnbcfm.com/api/v1/image/106069136-1565284193572gettyimages-1142580869.jpeg?v=1576531407&w=1400&h=950"
                        alt=""
                      />

                      <br />

                      <img
                        width="50"
                        height="50"
                        className="rounded-circle"
                        src="https://i.insider.com/5f454a4242f43f001ddfee74?width=1100&format=jpeg&auto=webp"
                        alt=""
                      />

                      <br />

                      <img
                        width="50"
                        height="50"
                        className="rounded-circle"
                        src="https://static.toiimg.com/thumb/msid-73895124,width-800,height-600,resizemode-75,imgsize-125747,pt-32,y_pad-40/73895124.jpg"
                        alt=""
                      />
                      <br />
                    </div>
                    <div className="col col-sm-8 mt-0 ml-2">
                      <h5> Anandhi </h5>
                      <h6 style={{ color: "#AAAAAA" }}>New to instagram</h6>
                      <h5>Master Mark </h5>
                      <h6 style={{ color: "#AAAAAA" }}>New to instagram</h6>

                      <h5>leo Messi</h5>
                      <h6 style={{ color: "#AAAAAA" }}>New to instagram</h6>

                      <h5>Yash Kgf</h5>
                      <h6 style={{ color: "#AAAAAA" }}>New to instagram</h6>
                    </div>
                  </div>
                </div>
                <div className="col col-sm-3">
                  <h6>see All</h6>
                  <br />
                  <br />
                  <h6 style={{ color: "blue" }}>Follow</h6>

                  <br />
                  <h6 style={{ color: "blue" }}>Follow</h6>
                  <br />

                  <h6 style={{ color: "blue" }}>Follow</h6>
                  <br />

                  <h6 style={{ color: "blue" }}>Follow</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
