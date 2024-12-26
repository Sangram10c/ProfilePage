import React from 'react';
import {Link} from "react-router-dom";
import FindDoctorsPage from "./FindDoctorsPage";

const Header = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{
                backgroundColor: "#FFF7E2",
                borderBottom: "1px solid #ddd", // Optional for a clean separation
            }}
        >
            <div className="container">

                {/* Brand name */}
                <a
                    className="navbar-brand text-uppercase text-success fw-bold"
                    href="#"
                    style={{
                        fontSize: "2rem", // Matches the visual size in the given image
                        letterSpacing: "2px",
                    }}
                >
                    AMRUTAM
                </a>

                {/* Toggle button for small screens */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
                        <li className="nav-item">
                            <a
                                className="nav-link active fw-semibold text-dark"
                                aria-current="page"
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">

                            <Link className="nav-link fw-semibold text-dark nav-link active fw-semibold text-dark"
                                  aria-current="page"
                                  href="#"
                                  title="Find"
                                  to="/FindDoctorsPage"

                                  style={{
                                      fontSize: "1rem",
                                      fontWeight: "500",
                                  }}>
                                Find Doctors
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link fw-semibold text-dark"
                                href="#"
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                }}
                            >
                                About Us
                            </a>
                        </li>
                    </ul>

                    {/* Login and Sign-up buttons */}
                    <div className="d-flex gap-3">
                        <button
                            className="btn btn-outline-dark px-4"
                            type="button"
                            style={{
                                fontSize: "0.9rem",
                                fontWeight: "500",
                            }}
                        >
                            Login
                        </button>
                        <button
                            className="btn btn-success px-4"
                            type="button"
                            style={{
                                fontSize: "0.9rem",
                                fontWeight: "500",
                            }}
                        >
                            Sign-up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
