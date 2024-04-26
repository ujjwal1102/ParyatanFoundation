import React from "react";
import logo from "../assets/fwdprayatanfoundationlogo/LOGOPNG.png";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacityValue = scrollPosition / 200; // Change opacity gradually from 0 to 1 as user scrolls
      setIsScrolled(scrollPosition > 200);
      setOpacity(opacityValue > 1 ? 1 : opacityValue); // Limit opacity to 1
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-100">
        <nav
          className={`navbar navbar-expand-lg navbar-light  fixed-top ${
            isScrolled ? "bg-light" : ""
          }`}
          style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
        >
          <div className="container">
            <a className="navbar-brand d-flex " href="#">
              <img
                src={logo}
                width={"24px"}
                height={"24px"}
                alt="Prayatan Foundation"
              />
            </a>

            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars border-0"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
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
      </div>
    </>
  );
};
export default NavBar;
