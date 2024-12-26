import React from "react";
import About from "./About";
const Appointment =()=>{
    return (

                    <div className="card rounded-4" style={{borderRadius: "8px", overflow: "hidden"}}>
                        <div className="card-body rounded-4 ">
                            <button
                                className="btn rounded-4 border-1 btn-outline-primary w-100 d-flex justify-content-between align-items-center "
                                style={{
                                    borderRadius: "8px",
                                    borderWidth: "2px",
                                    borderBlockColor: "#555753",
                                    padding: "10px 15px",
                                    fontWeight: "bold",
                                    fontSize: "16px"
                                }}
                            >
                                <span className="text-dark">Appointment Fee</span>
                                <span className="text-success">₹699.00</span>
                            </button>


                            <hr/>
                            <h6 className="d-flex align-items-center mb-3 mt-4">
                                Select your mode of session
                                <hr className="flex-grow-1 ms-2" style={{borderTop: "1px solid #ccc"}}/>
                            </h6>
                            <div className="d-flex justify-content-between mb-3">
                                {/* In-Clinic Button */}
                                <button
                                    className="btn btn-light text-center"
                                    style={{
                                        border: "1px solid #ddd",
                                        borderRadius: "8px",
                                        width: "30%",
                                        fontWeight: "bold",
                                        padding: "10px"
                                    }}
                                >
                                    In-Clinic <br/>
                                    <span className="text-muted"
                                          style={{fontWeight: "normal"}}>45 Mins</span>
                                </button>

                                {/* Video Button */}
                                <button
                                    className="btn btn-success text-center text-success"
                                    style={{
                                        border: "1px solid #28a745",
                                        borderRadius: "8px",
                                        width: "30%",
                                        fontWeight: "bold",
                                        padding: "10px",
                                        backgroundColor: "#e6f7e6"
                                    }}
                                >
                                    Video <span className="badge bg-success ms-1">✔</span> <br/>
                                    <span className="text-muted"
                                          style={{fontWeight: "normal"}}>45 Mins</span>
                                </button>

                                {/* Chat Button */}
                                <button
                                    className="btn btn-light text-center"
                                    style={{
                                        border: "1px solid #ddd",
                                        borderRadius: "8px",
                                        width: "30%",
                                        fontWeight: "bold",
                                        padding: "10px"
                                    }}
                                >
                                    Chat <br/>
                                    <span className="text-muted"
                                          style={{fontWeight: "normal"}}>10 Mins</span>
                                </button>
                            </div>




                            <div className="d-flex align-items-center mb-3 mt-4">
                                <h6 className="mb-0">Pick a time slot</h6>
                                <hr className="flex-grow-1 ms-2" style={{borderTop: "1px solid #ccc"}}/>
                                <i className="bi bi-calendar ms-2"
                                   style={{fontSize: "1.2rem", cursor: "pointer"}}></i>
                            </div>
                            <div
                                className="d-flex align-items-center px-3 py-3"
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                    overflowX: "auto", // Enable horizontal scrolling
                                    whiteSpace: "nowrap", // Prevent wrapping
                                    position: "relative", // For arrow positioning
                                }}
                            >
                                {/* Left Arrow */}
                                <i
                                    className="bi bi-chevron-left position-absolute"
                                    style={{
                                        left: "10px",
                                        zIndex: 1,
                                        cursor: "pointer",
                                        fontSize: "1.5rem",
                                    }}
                                ></i>

                                {/* Time Slots */}
                                <div className="d-flex justify-content-between w-100 mx-5">
                                    {/* Slot 1 */}
                                    <button
                                        className="btn"
                                        style={{
                                            backgroundColor: "#e6f7e6",
                                            border: "1px solid #28a745",
                                            borderRadius: "8px",
                                            width: "30%",
                                            padding: "10px",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                        }}
                                    >
                                        Mon, 10 Oct <br/>
                                        <span style={{fontWeight: "normal", color: "#666"}}>10 slots</span>
                                    </button>

                                    {/* Slot 2 */}
                                    <button
                                        className="btn"
                                        style={{
                                            backgroundColor: "#fff",
                                            border: "1px solid #ddd",
                                            borderRadius: "8px",
                                            width: "30%",
                                            padding: "10px",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                        }}
                                    >
                                        Tue, 11 Oct <br/>
                                        <span style={{fontWeight: "normal", color: "red"}}>02 slots</span>
                                    </button>

                                    {/* Slot 3 */}
                                    <button
                                        className="btn"
                                        style={{
                                            backgroundColor: "#fff",
                                            border: "1px solid #ddd",
                                            borderRadius: "8px",
                                            width: "30%",
                                            padding: "10px",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                        }}
                                    >
                                        Wed, 12 Oct <br/>
                                        <span
                                            style={{fontWeight: "normal", color: "orange"}}>05 slots</span>
                                    </button>
                                </div>

                                {/* Right Arrow */}
                                <i
                                    className="bi bi-chevron-right position-absolute"
                                    style={{
                                        right: "10px",
                                        zIndex: 1,
                                        cursor: "pointer",
                                        fontSize: "1.5rem",
                                    }}
                                ></i>
                            </div>


                            <div className="mt-4">
                                <strong>Morning</strong>
                                <div className="d-flex flex-wrap mt-3">
                                    {['09:00 AM', '09:30 AM', '10:00 AM', '10:15 AM', '10:45 AM', '11:00 AM'].map((time, index) => (
                                        <button
                                            key={index}
                                            className={`btn btn-sm m-2 rounded-pill ${time === '11:00 AM' ? 'btn-success text-white' : 'btn-outline-secondary'}`}
                                            style={{
                                                width: "90px",
                                                height: "60px",
                                            }}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>


                            <div className="mt-4">
                                <strong>Evening</strong>
                                <div className="d-flex flex-wrap mt-3">
                                    {['04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:15 PM'].map((time, index) => (
                                        <button
                                            key={index}
                                            className={`btn btn-sm m-2 rounded-pill btn-outline-secondary`}
                                            style={{
                                                width: "90px",
                                                height: "60px",
                                            }}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>


                            <button className="btn btn-success w-100 mt-5">Make An Appointment</button>
                        </div>
                    </div>


    )
}
export default Appointment;