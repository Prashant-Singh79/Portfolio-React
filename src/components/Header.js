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
        <div className="text-danger heading-brief">Wowo</div>
        <div className="text-danger heading-brief">Wowo</div>
      </div>
    </div>
  );
}

export default Header;
