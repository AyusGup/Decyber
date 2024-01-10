import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import userContext from '../context/users/userContext';

export default function Navbar(props) {
    const user_detail = useContext(userContext);
    const { user } = user_detail;

    const logoutHandler = () => {
        localStorage.removeItem('token');
        props.showAlert("success", "Logout Successful");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#01171b" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="../decyber.png" alt="DeCyber" width="200" height="80" className="d-inline-block align-text-top" />
                        {/* <img src="../invictus.png" alt="DeCyber" width="120" height="50" className="d-inline-block align-text-top" /> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "cyan", fontSize: "25px", fontWeight: "600" }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about" style={{ color: "cyan", fontSize: "25px", fontWeight: "600" }}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/memories" style={{ color: "cyan", fontSize: "25px", fontWeight: "600" }}>Memories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/rules" style={{ color: "cyan", fontSize: "25px", fontWeight: "600" }}>Rules</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/leaderboard" style={{ color: "cyan", fontSize: "25px", fontWeight: "600" }}>Scoreboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/ap" style={{ color: "cyan", fontSize: "25px", fontWeight: "600" }}>AP <sup style={{ color: "cyan", fontWeight: "600" }}>{user.ap}</sup></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/dashboard" style={{ color: "cyan", fontSize: "25px", fontWeight: "600" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cyan" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                {!localStorage.getItem('token') ? <Link className='dropdown-item' to="/login">
                                    <button type="button" className="btn" style={{ backgroundColor: "#212529", color: "cyan", fontSize: "25px", fontWeight: "600" }}>Login</button>
                                </Link> : <Link className='dropdown-item' to="/login">
                                    <button type="button" onClick={logoutHandler} className="btn" style={{ backgroundColor: "#212529", color: "cyan", fontSize: "25px", fontWeight: "600" }}>Logout</button>
                                </Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
