import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/login.css"


export default function Login(props) {
    const [loader, setLoader] = useState(false)
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ team_name: "", team_password: "" });


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        // const response = await fetch("https://decyber.onrender.com/api/auth/login", {
        setLoader(true);
        const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ team_name: credentials.team_name, team_password: credentials.team_password })//will convert the object into type JSON
        });
        const json = await response.json();
        setLoader(false)
        if (json.success) {
            props.showAlert("success", "Login Successful");
            //save the auth token and redirect
            localStorage.setItem('token', json.auth_token);
            navigate("/round2");
        }
        else {
            props.showAlert("danger", "Invalid Credentials");
        }

    }
    return (
        <div className='Login'>
            <div className='container login_form' style={{ width: "45%" }}>
                {!loader ? <form onSubmit={submitHandler}>
                    <h1 style={{ textAlign: "center", margin: "1rem 0" }}>Team Login</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "white" }}><h3>Team Name</h3> </label>
                        <input type="text" className="form-control" name="team_name" id="team_name" aria-describedby="emailHelp" value={credentials.team_name} onChange={onChange} />
                    </div>
                    <div className="mb-3 team-password">
                        <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "white" }} ><h3>Team Password</h3></label>
                        <input type="password" className="form-control" name="team_password" id="team_password" value={credentials.team_password} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#212529", color: "cyan", border: "none" }}>Login</button>
                    <hr style={{ color: 'white' }} />
                    <div className='form-text mt-3'><p> New to DeCyber ?</p></div>
                    <Link to="/signup"><button type="submit" className="btn btn-primary my-3" style={{ backgroundColor: "#212529", color: "lightgreen", border: "none" }}>Signup</button></Link>
                </form> : <div className="overlay">
                    <div className="overlay__inner">
                        <div className="overlay__content"><span className="spinner"></span></div>
                    </div>
                </div>}
            </div>
        </div>
    )
}
