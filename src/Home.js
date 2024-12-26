import React from 'react';
import About from './components/About';
import Appointment from "./components/Appointment";
import Specialization from './components/Specialization';
import Work from "./components/Work";
import WorkExperience from "./components/WorkExperience";
import Review from "./components/Review";
import DoctorProfile from "./components/DoctorProfile";
import {Link} from "react-router-dom";

const Cards = () => {
    return (
        <div className="container mt-5">



            >
            <div className="row">
                <div className="col-12 mb-5">
                    <DoctorProfile/>
                </div>
            </div>

            <div className="row">
                {/* Left Side - About Card */}
                <div className="col-md-6">
                <About/>
                    <div className="mt-3">
                        <Specialization/>
                    </div>
                    <div className="mt-3">
                        <Work/>
                    </div>
                    <div className="mt-3">
                        <WorkExperience/>
                    </div>
                    <div className="mt-3">
                        <Review/>
                    </div>


                </div>

                {/* Right Side - Appointment Card */}
                <div className="col-md-6 align-items-stretch">
                    <Appointment/>
                </div>
                <div></div>
            </div>

        </div>
    );
};

export default Cards;
