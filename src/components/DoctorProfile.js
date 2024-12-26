import React from 'react';
import { Card } from 'react-bootstrap';
import doctorImage from './img.png';
import verifiedBadge from './verified-badge.png';
import starImage from './star-image.png';
import bannerImage1 from './Banner.png'; // First banner image
import bannerImage2 from './Banner2.png'; // Second banner image

const DoctorProfile = () => {
    return (
        <div className="row">
            <div className="col-12">
                <Card className="shadow-sm" style={{overflow: 'hidden'}}>
                    {/* Top Banner Section */}
                    <div
                        style={{
                            backgroundImage: `url(${bannerImage1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '90px',
                        }}
                    ></div>
                    <div
                        style={{
                             backgroundImage: `url(${bannerImage2})`,
                             // backgroundColor:"#FFFBF2",
                            // backgroundSize: 'cover',
                            // backgroundPosition: 'center',
                            height:"max-content",
                        }}
                    ></div>

                    {/* Doctor Info Section */}
                    <Card.Body style={{position: 'relative', zIndex: 1, backgroundColor: '#fff'}}>
                        <div className="d-flex align-items-center">
                            {/* Doctor Image */}
                            <img
                                src={doctorImage}
                                alt="Doctor"
                                className="rounded-circle me-3"
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    marginTop: '-40px', // Pull image slightly over banner
                                    border: '3px solid white',
                                }}
                            />

                            {/* Doctor Details */}
                            <div className="flex-grow-1">
                                <h5 className="d-flex align-items-center">
                                    Dr. Bruce Willis
                                    <img
                                        src={verifiedBadge}
                                        alt="Verified"
                                        className="ms-2"
                                        style={{width: '20px', height: '20px'}}
                                    />
                                </h5>
                                <p className="mb-0 text-success">Gynecologist</p>
                                <p className="mb-0">
                                    <img
                                        src={starImage}
                                        alt="Star Rating"
                                        style={{width: '80px', height: '18px'}}
                                    />
                                </p>
                            </div>

                            {/* Stats Section */}
                            <div className="d-flex align-items-center gap-4 ms-auto"
                            >
                                <div className="text-center">
                                    <p className="mb-0 text-muted">Followers</p>
                                    <p className="mb-0 fw-bold">850</p>
                                </div>
                                <div className="text-center">
                                    <p className="mb-0 text-muted">Following</p>
                                    <p className="mb-0 fw-bold">18k</p>
                                </div>
                                <div className="text-center">
                                    <p className="mb-0 text-muted">Posts</p>
                                    <p className="mb-0 fw-bold">250</p>
                                </div>
                            </div>

                            {/* Appointment Button */}
                            <button className="btn btn-success ms-4" type="button">
                                Book an Appointment
                            </button>
                            <div
                                // style={{
                                //     // backgroundImage: `url(${bannerImage2})`,
                                //     backgroundColor:"#FFFBF2",
                                //     backgroundSize: 'cover',
                                //     backgroundPosition: 'center',
                                //     height: '40px',
                                // }}
                            ></div>
                        </div>

                    </Card.Body>

                    {/* Bottom Banner Section */}

                </Card>
            </div>
        </div>
    );
};

export default DoctorProfile;
