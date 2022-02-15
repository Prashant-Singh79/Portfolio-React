import React from 'react'
import Typed from "react-typed"

function Header() {
  return (
    <div id="Header" className='header-wrapper'>
        <div  className='main-info'>
            <h1>Prashant Singh</h1>
            {/* <h2>I AM</h2> */}
            <Typed
            className="typed-text"
            strings={["Web Designer","Web developer"]}
            typeSpeed={40}
            backSpeed={40}
            loop
             />
        </div>
    </div>
  )
}

export default Header