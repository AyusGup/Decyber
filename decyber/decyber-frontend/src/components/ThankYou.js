import React from "react";
import { Link } from "react-router-dom";

const Grid = () => {
    return (
        <div>
            <div className="thank-you-container" style={{
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "40vh", 
                textAlign: "center"
            }}>
                <h1 style={{ fontSize: "15vh", fontWeight: "bold" }}>Thank You!</h1>
                <p style={{ fontSize: "8vh" }}>Let's see if you can solve Bollywood!</p>
            </div>
            <div style={{
                textAlign: "center", 
                height: "20vh",
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center", 
                padding: "0 30px"
            }}>
                <Link className="dropdown-item" to="/grid" style={{ display: "inline-block" }}>
                    <button
                        type="button"
                        className="btn"
                        style={{
                            backgroundColor: "#212529",
                            color: "cyan",
                            fontSize: "5vh",
                            fontWeight: "600",
                        }}
                    >
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Grid;
