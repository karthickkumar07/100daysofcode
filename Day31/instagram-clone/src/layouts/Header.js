import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div class="main">
        <div class="nav1">
          <div class="logo">
            <img
              width="120"
              height="40"
              src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png.png"
              alt=""
            />
          </div>
          <div class="nav1-link">
            <ul class="topics">
              <li>
                <i class="fa fa-2x fa-home" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-2x  fa-telegram" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-2x fa-compass" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-2x fa-heart-o" aria-hidden="true"></i>
              </li>
              <li>
                <img
                  width="30"
                  height="30"
                  src="https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg"
                  alt=""
                  className="rounded-circle img"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
