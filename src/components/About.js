import React from "react";
import Frameimage from "./Frame.png"

const About = () => {
    return (
                    <div className="card rounded-4" style={{ borderRadius: "8px", overflow: "hidden" }}>
                        {/* Header Section */}
                        <div
                            className="card-header d-flex justify-content-between align-items-center rounded-top-4"
                            style={{ backgroundColor: "#f6f9ef", padding: "15px 15px" }}
                        >
                            <h5 className="mb-0">A Little About Me</h5>
                            <button className="btn btn-outline-primary btn-sm">Follow +</button>
                        </div>
                        {/* Body Section */}
                        <div className="card-body">
                            <p className="card-text text-muted">
                                Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. Love to work
                                with all my hospital
                                staff and senior doctors. Completed my graduation in Gynaecologist Medicine from the
                                <span className="text-muted">...</span>
                            </p>
                            <button className="btn btn-link p-0 text-decoration-none float-end text-dark "
                                    style={{fontSize: "14px"}}>
                                Read More
                            </button>
                            <hr/>
                            <div className="d-flex align-items-center mt-3">
                                {/* "Language Spoken" text */}
                                <strong className="me-3 text-bold">Language Spoken</strong>

                                {/* Languages Badges */}
                                <div className="d-flex">
                                    <span className="badge text-dark me-3"
                                          style={{backgroundColor: "#f8f9fa", fontWeight: "normal"}}>English</span>
                                    <span className="badge text-dark me-3"
                                          style={{backgroundColor: "#f8f9fa", fontWeight: "normal"}}>Hindi</span>
                                    <span className="badge text-dark"
                                          style={{backgroundColor: "#f8f9fa", fontWeight: "normal"}}>Telugu</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-4 mb-3 ms-3">
                                <img
                                    src={Frameimage}
                                    className=" me-3"
                                    style={{width: '170px', height: '40px'}}
                                />
                            </div>
                            </div>
                        </div>


    );
};

export default About;
