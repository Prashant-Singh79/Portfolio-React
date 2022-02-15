import React from "react";
import Typed from "react-typed";


function Header() {
  return (
    <div>
      <div id="Header" className="header-wrapper">
      <div className="heading-social">
      <a href="https://www.google.com/" >
        <img className="insta-img" src={require('../images/instagram.png')}  />
        </a>
        <a >
        <img className="insta-img" src={require('../images/facebook.png')}  />
        </a>
        <a >
        <img className="insta-img" src={require('../images/ln.png')}  />
        </a>

      </div>
        <div className="main-info">
          <h1>Prashant Singh</h1>

          {/* <h2>I AM</h2> */}
          <Typed
            className="typed-text"
            strings={["Web Designer", "Web developer"]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </div>
        <div className="heading-brief">Currently working as Software Engineer at <br/>Nickelfox Technologies</div>
        <div className="heading-arrow">
        <a >
        <img className="insta-img" src={require('../images/arrowdown.png')}  />
        </a>

        </div>
      </div>
    </div>
  );
}

export default Header;
