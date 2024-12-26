import React from "react";

const WorkExperienceCard = () => {
    return (
        <div className="card border-1 shadow-sm rounded-4 red">
            {/* Header Section */}
            <div
                className="card-header d-flex justify-content-between align-items-center rounded-top-4"
                style={{backgroundColor: "#f6f9ef", padding: "15px 15px"}}
            >
                <h5 className="mb-0 ">My Work Experience</h5>
            </div>

            {/* Body Section */}
            <div className="card-body">
                <p className="text-success fw-bold mb-3">
                    I HAVE BEEN IN PRACTICE FOR : 7+ YEARS
                </p>

                <div className="d-flex align-items-start mb-3">
                    <div className="me-3">
                        <i
                            className="bi bi-building"
                            style={{
                                fontSize: "24px",
                                color: "#5a5a5a",
                            }}
                        ></i>
                    </div>
                    <div className="flex-grow-1">
                        <h6 className="mb-1 fw-bold">Midtown Medical Clinic</h6>
                        <p className="mb-0 text-muted">Senior doctor</p>
                    </div>
                    <div className="text-end text-muted">
                        2016-PRESENT
                    </div>
                </div>

                <div className="d-flex align-items-start">
                    <div className="me-3">
                        <i
                            className="bi bi-building"
                            style={{
                                fontSize: "24px",
                                color: "#5a5a5a",
                            }}
                        ></i>
                    </div>
                    <div className="flex-grow-1">
                        <h6 className="mb-1 fw-bold">Midtown Medical Clinic</h6>
                        <p className="mb-0 text-muted">Senior doctor</p>
                    </div>
                    <div className="text-end text-muted">
                        2010-2015
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperienceCard;
