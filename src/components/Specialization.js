import React from "react";
import Frameimage1 from "./Img2.png";
const SpecializationCard = () => {
    return (
        <div className="card rounded-4" style={{borderRadius: "8px", overflow: "hidden",}}>
            {/* Header Section */}
            <div
                className="card-header d-flex justify-content-between align-items-center rounded-top-4"
                style={{backgroundColor: "#f6f9ef", padding: "15px 15px"}}
            >
                <h5 className="mb-0">I Specialize In</h5>
            </div>

            <div className="d-flex align-items-center mt-4 mb-3 mx-5">
                <img
                    src={Frameimage1}
                    className=" me-3"
                    style={{width: '300px', height: '100px'}}
                />
            </div>
            <div>


            </div>
        </div>
    );
};

export default SpecializationCard;
