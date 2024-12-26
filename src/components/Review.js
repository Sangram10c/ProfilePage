import React from "react";
import Review1 from "./img3.png";
const Review = () => {
    return (
        <div className="card rounded-4" style={{borderRadius: "8px", overflow: "hidden",}}>
            {/* Header Section */}
            <div
                className="card-header d-flex justify-content-between align-items-center rounded-top-4"
                style={{backgroundColor: "#f6f9ef", padding: "15px 15px"}}
            >
                <h5 className="mb-0">Featured Review (102)</h5>
            </div>

            <div className="d-flex align-items-center mt-4 mb-3 mx-5">
                <img
                    src={Review1}
                    className=" me-3"
                    style={{width: '330px', height: '130px'}}
                />
            </div>

            <div className="d-flex align-items-center mt-4 mb-3 mx-5">
                <img
                    src={Review1}
                    className=" me-3"
                    style={{width: '330px', height: '130px'}}
                />
            </div>
            <div>


            </div>
        </div>
    );
};

export default Review;
