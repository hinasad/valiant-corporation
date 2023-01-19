import React from "react";
import { NavLink } from "react-router-dom";
import LogoBrand from "../images/logo-brand-1.png";
import Phone from "../images/phone.png";

const NavBar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex">
                <div className="logo">
                  <img src={LogoBrand} />
                </div>
                <div className="search-form">
                  <i className="fas fa-search"></i>
                  <form>
                    <input
                      type="text"
                      name="search"
                      placeholder="Search here..."
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex ai-center jc-flex-end">
                <div className="phone-number">
                  <img src={Phone} alt="phone" />
                </div>
                <div className="social-media-icons">
                  <a href="#">
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-square-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-square-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar">
            <nav className="navbar navbar-expand-lg  ">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-45 mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/businessactivities"
                      >
                        BusinessActivities
                      </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#services_section"
                      >
                        Services
                      </a>
                      {/* <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Service 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Service 2
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Service 3
                          </a>
                        </li>
                      </ul> */}
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#our_company_section">About</a>
                      {/* <NavLink className="nav-link" to="#our_company_section">
                        About
                      </NavLink> */}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/career"
                      >
                        Career
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <button class="btns" data-mdb-ripple-color="dark" type="button">
              <i class="fas fa-pencil"></i>Get A Free Quote
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
