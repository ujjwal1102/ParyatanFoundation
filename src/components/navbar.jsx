import React from "react";
import logo from "../assets/fwdprayatanfoundationlogo/LOGO_PNG_FORMAT.png"
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand d-flex " href="#">

            <img src={logo} width={"24px"} height={"24px"} alt="Prayatan Foundation"/>
            {/* <span>Prayatan Foundation</span> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#programs">
                  Programs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#get-involved">
                  Get Involved
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#collaborate">
                  Collaborate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="jumbotron text-center">
        <h1>Welcome to Prayatan Foundation</h1>
        <p class="lead">Empowering Communities, Transforming Lives</p>
      </header>
    </>
  );
};
export default NavBar;
