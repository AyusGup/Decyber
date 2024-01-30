import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/users/userContext";
import "../styles/common-bar.css";
export default function Navbar(props) {
  const user_detail = useContext(userContext);
  const { user } = user_detail;

  const logoutHandler = () => {
    localStorage.removeItem("token");
    props.showAlert("success", "Logout Successful");
  };
  return (
    <div>
      <nav>
        <Link className="navbar-brand" to="/">
          <img
            src="../decyber.png"
            alt="DeCyber"
            width="400"
            height="160"
            className="d-inline-block align-text-top"
          />
          {/* <img src="../invictus.png" alt="DeCyber" width="120" height="50" className="d-inline-block align-text-top" /> */}
        </Link>
        <div className="nav-top-bar">
          {/* <div className="navContent"> */}
          <div className="layoutItem">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/leaderboard"
              style={{ color: "cyan", fontSize: "5vh", fontWeight: "600" }}
            >
              Scoreboard
            </Link>
          </div>
          {/* <div className="layoutItem">
              <Link
                className="nav-link active"
                to="/ap"
                style={{ color: "cyan", fontSize: "25px", fontWeight: "600" }}
              >
                AP{" "}
                <sup style={{ color: "cyan", fontWeight: "600" }}>
                  {user.ap}
                </sup>
              </Link>
            </div> */}
          <div className="profile-Logout">
            <div className="layoutItem">
              <Link className="nav-link active" to="/dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="cyan"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </Link>
            </div>
            <div>
              {!localStorage.getItem("token") ? (
                <Link className="dropdown-item" to="/login">
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
                    Login
                  </button>
                </Link>
              ) : (
                <Link className="dropdown-item" to="/login">
                  <button
                    type="button"
                    onClick={logoutHandler}
                    className="btn"
                    style={{
                      backgroundColor: "#212529",
                      color: "cyan",
                      fontSize: "5vh",
                      fontWeight: "600",
                    }}
                  >
                    Logout
                  </button>
                </Link>
              )}
            </div>
          </div>
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
}
