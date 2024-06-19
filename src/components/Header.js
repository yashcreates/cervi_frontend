import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 fixed-top ">
    <div className="container ">
      <h4><a href="#" className="nav-link"><span className="text-light"> Kavya </span> </a>
      </h4>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navmenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            
          </li>
          <li className="nav-item ">
           <h4><a href="loginas.html" className="nav-link"><span className="text-warning"> | </span> </a></h4>
          </li>
          <li className="nav-item">
            <h4><a href="signup/signupas.html" className="nav-link"><span className="text-warning"> Sign Up </span> </a>
            </h4>
          </li>
   
        </ul>
      </div>

    </div>
  </nav>
  )
}
