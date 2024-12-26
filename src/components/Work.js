import React from "react";
import { Button } from "react-bootstrap";

const Work = () => {
    return (
        <div className="card  shadow-sm rounded-3 border-1 rounded-4">
            {/* Header Section */}
            <div
                className="card-header d-flex justify-content-between align-items-center rounded-top-4"
                style={{backgroundColor: "#f6f9ef", padding: "15px 15px"}}
            >
                <h5 className="mb-0 ">The Concerns I Treat</h5>
            </div>

            {/* Buttons Section */}
            <div className="card-body d-flex flex-wrap gap-2 pt-3 font-weight-bolder">
                {/* Buttons */}
                <Button
                    variant="light"
                    className="border-0 rounded-pill px-3 text-success  py-2 blockquote shadow-sm"
                >
                    Skin Treatment
                </Button>
                <Button
                    variant="light"
                    className="border-0 rounded-pill px-3  text-success py-2  blockquote shadow-sm"
                >
                    Pregnancy
                </Button>
                <Button
                    variant="light"
                    className="border-0 rounded-pill px-3 text-success py-2 blockquote  shadow-sm"
                >
                    Period Doubts
                </Button>
                <Button
                    variant="light"
                    className="border-0 rounded-pill px-3 text-success py-2  blockquote shadow-sm"
                >
                    Endometriosis
                </Button>
                <Button
                    variant="light"
                    className="border-0 rounded-pill px-3 text-success py-2 blockquote shadow-sm"
                >
                    Pelvic Pain
                </Button>
                <Button
                    variant="light"
                    className="border-0 rounded-pill px-3 py-2 text-success blockquote shadow-sm"
                >
                    Ovarian Cysts
                </Button>
                <Button
                    variant="light"
                    className="border-0 rounded-pill px-3 py-2 text-success blockquote  shadow-sm"
                >
                    + 5 More
                </Button>
            </div>
        </div>
    );
};

export default Work;
