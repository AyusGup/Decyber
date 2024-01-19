import React from "react";
import { Link } from "react-router-dom";
import "../styles/common-bar.css";
const Sidebar = () => {
  return (
    <div className="SideBar">
      {/* <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      {/* <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      > */}
      <div>
        <div className="sidebar-items">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/"
            style={{ color: "cyan", fontSize: "5vw", fontWeight: "600" }}
          >
            Home
          </Link>
        </div>

        <div className="sidebar-items">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/about"
            style={{ color: "cyan", fontSize: "5vw", fontWeight: "600" }}
          >
            About
          </Link>
        </div>

        <div className="sidebar-items">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/memories"
            style={{ color: "cyan", fontSize: "5vw", fontWeight: "600" }}
          >
            Memories
          </Link>
        </div>
      </div>
      <div>
        <div className="sidebar-items ">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/rules"
            style={{ color: "cyan", fontSize: "5vw", fontWeight: "600" }}
          >
            Rules
          </Link>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Sidebar;
