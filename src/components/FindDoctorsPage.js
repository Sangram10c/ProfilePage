import React from 'react';
import { Card, Button, Form, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from './logo.png';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';

const FindDoctorsPage = () => {
    return (
        <div style={{ backgroundColor: '#fffffe', minHeight: '100vh', paddingBottom: '50px' }}>
            <Link
                to="/"
                className="text-reset text-decoration-none"
                target="_blank"
            >
            {/* Header Section */}
            <div className="text-center py-4" style={{ backgroundColor: '#E9F4EC' }}>
                <h2 className="fw-bold" style={{ color: '#090909' }}>
                    Find Expert Doctors For An In-Clinic Session Here
                </h2>
                <div className="d-flex justify-content-center mt-3 gap-3">
                    {/* Select Location Input */}
                    <div className="input-group" style={{maxWidth: "200px"}}>
        <span className="input-group-text">
            <i className="bi bi-geo-alt"></i> {/* Bootstrap Location Icon */}
        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Select Location"
                        />
                    </div>

                    {/* Doctor, Specialization, Clinic Name Input */}
                    <div className="input-group" style={{maxWidth: "350px"}}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Doctor, specialisation, clinic name"
                        />
                        <span className="input-group-text">
            <i className="bi bi-chevron-down"></i> {/* Bootstrap Arrow Icon */}
        </span>
                    </div>
                </div>

            </div>


                {/* Filters Section */}
                <div className="container mt-4">
                    <div
                        className="d-flex justify-content-start align-items-center gap-5 w-auto mx-3"
                        style={{padding: "10px 20px", borderRadius: "2px"}}
                    >
                        {/* Expertise Dropdown */}
                        <Dropdown>
                            <Dropdown.Toggle className=" mx-3"
                                             variant="outline-light"
                                             id="dropdown-expertise"
                                             style={{
                                                 border: "1px solid #D9D9D9",
                                                 borderRadius: "10px",
                                                 color: "#000",
                                                 fontSize: "0.9rem",
                                        padding: "8px 16px",
                                        backgroundColor: "#E9F4EC",
                                    }}
                                >
                                    Expertise
                                </Dropdown.Toggle>
                            </Dropdown>

                            {/* Gender Dropdown */}
                            <Dropdown>
                                <Dropdown.Toggle  className=" mx-3"
                                    variant="outline-light"
                                    id="dropdown-gender"
                                    style={{
                                        border: "1px solid #D9D9D9",
                                        borderRadius: "10px",
                                        color: "#000",
                                        fontSize: "0.9rem",
                                        padding: "8px 16px",
                                        backgroundColor: "#E9F4EC",
                                    }}
                                >
                                    Gender
                                </Dropdown.Toggle>
                            </Dropdown>

                            {/* Fees Dropdown */}
                            <Dropdown>
                                <Dropdown.Toggle    className=" mx-3"
                                    variant="outline-light"
                                    id="dropdown-fees"
                                    style={{
                                        border: "1px solid #D9D9D9",
                                        borderRadius: "10px",
                                        color: "#000",
                                        fontSize: "0.9rem",
                                        padding: "8px 16px",
                                        backgroundColor: "#E9F4EC",
                                    }}
                                >
                                    Fees
                                </Dropdown.Toggle>
                            </Dropdown>

                            {/* Languages Dropdown */}
                            <Dropdown>
                                <Dropdown.Toggle className=" mx-3"
                                    variant="outline-light"
                                    id="dropdown-languages"
                                    style={{
                                        border: "1px solid #D9D9D9",
                                        borderRadius: "10px",
                                        color: "#000",
                                        fontSize: "0.9rem",
                                        padding: "8px 16px",
                                        backgroundColor: "#E9F4EC",
                                    }}
                                >
                                    Languages
                                </Dropdown.Toggle>
                            </Dropdown>

                            {/* All Filters Dropdown */}
                            <Dropdown>
                                <Dropdown.Toggle className="text-success mx-3"
                                    variant="outline-light"
                                    id="dropdown-all-filters"
                                    style={{
                                        border: "1px solid #D9D9D9",
                                        borderRadius: "10px",
                                        color: "#000",
                                        fontSize: "0.9rem",
                                        padding: "8px 16px",
                                        backgroundColor: "#E9F4EC", // Light green background for "All Filters"
                                    }}
                                >
                                    All Filters
                                </Dropdown.Toggle>
                            </Dropdown>

                    </div>


                    {/* Applied Filters */}
                    <div className="container mt-4 my-4">
                        <div className="d-flex flex-wrap gap-2 my-4" style={{justifyContent: "flex-end"}}>
                            {/* Custom Badge */}
                            <span
                                style={{
                                    backgroundColor: "#E9F4EC", // Light green background
                                    color: "#000", // Black text
                                    fontWeight: "500",
                                    fontSize: "0.9rem",
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    border: "1px solid #C6C6C6", // Optional border for better styling
                                }}
                            >
            Hair care
            <span
                style={{
                    marginLeft: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
            >
                ×
            </span>
        </span>
                            <span
                                style={{
                                    backgroundColor: "#E9F4EC",
                                    color: "#000",
                                    fontWeight: "500",
                                    fontSize: "0.9rem",
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    border: "1px solid #C6C6C6",
                                }}
                            >
            Female
            <span
                style={{
                    marginLeft: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
            >
                ×
            </span>
        </span>
                            <span
                                style={{
                                    backgroundColor: "#E9F4EC",
                                    color: "#000",
                                    fontWeight: "500",
                                    fontSize: "0.9rem",
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    border: "1px solid #C6C6C6",
                                }}
                            >
            Rs.0-Rs.500
            <span
                style={{
                    marginLeft: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
            >
                ×
            </span>
        </span>
                            <span
                                style={{
                                    backgroundColor: "#E9F4EC",
                                    color: "#000",
                                    fontWeight: "500",
                                    fontSize: "0.9rem",
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    border: "1px solid #C6C6C6",
                                }}
                            >
            Hindi
            <span
                style={{
                    marginLeft: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
            >
                ×
            </span>
        </span>
                        </div>
                    </div>


                </div>

                {/* Doctors Cards Section */}
                <div className="container mt-4">
                    <Row className="g-4">
                        {[1, 2, 3].map((_, idx) => (
                            <Col key={idx} md={4}>
                                <Card className="shadow-sm mx-auto"
                                      style={{
                                          backgroundColor: '#FFF7E2',
                                          borderRadius: "15px",
                                          width: "350px",

                                      }}
                                >
                                    <Card.Body className="text-center ">
                                        {/* Doctor Image */}
                                        <img
                                            src={logo} // Replace with actual logo or image URL
                                            alt="Doctor"
                                            className="rounded-circle"
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                                objectFit: "cover",
                                                marginBottom: "10px",
                                            }}
                                        />

                                        {/* Rating below the image */}
                                        <div className="d-flex justify-content-center align-items-center gap-1 mb-3">
                    <span
                        className="fw-bold"
                        style={{color: "#F4B400", fontSize: "1rem"}}
                    >
                        4.5 ★
                    </span>
                                        </div>

                                        {/* Doctor Name and Specialization */}
                                        <h5 className="fw-bold">Dr. Prerna Narang</h5>

                                        {/* Additional Information */}
                                        <ul
                                            className="list-unstyled text-muted mb-3 text-start"
                                            style={{fontSize: "0.85rem"}}
                                        >
                                            <li className="d-flex align-items-center mb-2">
                                                <img
                                                    src={logo1} // Replace with actual icon URL
                                                    alt="Experience Icon"
                                                    style={{width: "16px", height: "16px", marginRight: "8px"}}
                                                />
                                                Male-Female Infertility
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                            <img
                                                src={logo2} // Replace with actual icon URL
                                                alt="Experience Icon"
                                                style={{width: "18px", height: "16px", marginRight: "8px"}}
                                            />
                                            7 Years of Experience
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img
                                                src={logo3} // Replace with actual icon URL
                                                alt="Language Icon"
                                                style={{width: "16px", height: "16px", marginRight: "8px"}}
                                            />
                                            Speaks: English, Hindi, Marathi
                                        </li>
                                    </ul>



                                    <Row>
                                        <Col>

                                        <div
                                                    style={{
                                                        backgroundColor: "#FFF7E2",
                                                        borderRadius: "8px",
                                                        border: "1px solid #C6C6C6",
                                                        padding: "5px 2px",

                                                        color: "#090909",
                                                        Width: "80px", // Ensures consistent box width

                                                    }}
                                                >
                                                    Video Consultation <br />
                                                    <span style={{ fontWeight: "bold", color: "#0e4c0c" }}>₹800</span>
                                                </div>
                                        </Col>

                                        <Col>

                                            <div
                                                style={{
                                                    backgroundColor: "#FFF7E2",
                                                    borderRadius: "8px",
                                                    border: "1px solid #C6C6C6",
                                                    padding: "5px 7px",

                                                    color: "#090909",
                                                    Width: "50px", // Ensures consistent box width

                                                }}
                                            >
                                                Chat Consultation<br />
                                                <span style={{  fontWeight: "bold",color: "#0e4c0c", }}>Free</span>
                                            </div>
                                        </Col>

                                    </Row>









                                    {/* Buttons */}
                                    <div className="d-grid gap-2 mt-3">
                                        <Button variant="outline-success" size="md">
                                            View Profile
                                        </Button>
                                        <Button variant="success" size="lg">
                                            Book a Consultation
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            </Link>
        </div>
    );
};

export default FindDoctorsPage;
