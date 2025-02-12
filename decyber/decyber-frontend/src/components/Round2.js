import React from "react";
// import ImageGuesser from "./ImageGuesser";
// import Grid from "./Grid";
import { Link } from "react-router-dom";
const Round2 = () => {
  return (
    <div style ={{textAlign: "center", width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding:"0 200px 0 200px"}}>
      <Link className="dropdown-item" to="/imageguesser" style={{padding:"0 0 0 0", margin:"0 0 0 0", display:"inline-block"}}  >
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
                  Start
                </button>
            </Link>
    </div>
  );
};

export default Round2;