import React from 'react'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand" href="#">Personal Portfolio</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span clasNames="navbar-toggler-icon">&#9776;</span>
    </button>
   <div className='container'>

  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#Header">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      
      </ul>
      
    </div>
   </div>
  </nav>
  )
}

export default Navbar