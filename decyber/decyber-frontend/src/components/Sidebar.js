import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/common-bar.css";
const Sidebar = () => {
  const [toggle, settoggle] = useState(true);
  const clickHandler = () => {
    settoggle(!toggle);
  };
  return (
    <>
      <button className="mobile-button" onClick={clickHandler}></button>
      {toggle && (
        <div className="SideBar">
          <div>
            <div className="sidebar-items">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: "#e0b31d", fontSize: "5vw", fontWeight: "600" }}
              >
                Home
              </Link>
            </div>

            <div className="sidebar-items">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/about"
                style={{ color: "#e0b31d", fontSize: "5vw", fontWeight: "600" }}
              >
                About
              </Link>
            </div>

            <div className="sidebar-items">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
                style={{ color: "#e0b31d", fontSize: "5vw", fontWeight: "600" }}
              >
                User
              </Link>
            </div>
            <div className="sidebar-items ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/rules"
                style={{ color: "#e0b31d", fontSize: "5vw", fontWeight: "600" }}
              >
                Rules
              </Link>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
    </>
  );
};
export default Sidebar;
