import React, { useContext, useState, useEffect } from "react";
import userContext from "../context/users/userContext";
import "../styles/dashboard.css";
import { Avatar } from "../icons";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";
import scoreboardContext from "../context/scoreboard/scoreboardContext";

export default function Dashboard({ time }) {
  console.log(time);
  let navigate = useNavigate();
  const user_detail = useContext(userContext);
  const { user, loader, getUser } = user_detail;
  const scoreboard = useContext(scoreboardContext);
  const { usersScores, getScores } = scoreboard;
  
  // useEffect should be called unconditionally
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getUser();
      getScores();
    }
  }, []); // Empty dependency array to run the effect only once

  // Check if user is undefined
  if (!user || Object.keys(user).length === 0) {
    // If user is not available yet, return null or a loading indicator
    return null; // or loading indicator
  }

  // Now user object is available, proceed with rendering
  
  const myrank =
    usersScores.length !== 0
      ? usersScores.find((ele) => ele.team_name === user.team_name)?.rank || 0
      : 0;

  return (
    <>
      {!loader ? (
        <div className="Dashboard">
          <div className="team-name-header">
            <h1
              style={{
                textAlign: "center",
                margin: "1rem 0",
                color: "lightgreen",
              }}
            >
              Hi you are {user.team_name}
            </h1>
          </div>
          <div className="dashboard-outlier d-flex justify-content-center align-items-center flex-wrap ">
            <div className="outlier-2 d-flex flex-column justify-content-center align-items-center">
              <div className="user-status">
                <div className="country-points db-props">
                  <div className="cps">
                    <div>
                      <h4>{user.cp}</h4>
                    </div>
                  </div>
                  <p>Your Total Shares</p>
                </div>

                <div className="army-points db-props">
                  <div className="aps">
                    <div>
                      <h4>{user.ap}</h4>
                    </div>
                  </div>
                  <p>Your Gold Value</p>
                </div>

                <div className="rank db-props">
                  <div className="rank-props">
                    <h4>
                      {myrank.toString()}
                      {myrank !== 1
                        ? myrank !== 2
                          ? myrank !== 3
                            ? "th"
                            : "rd"
                          : "nd"
                        : "st"}
                    </h4>
                    <p>of {usersScores.length} users</p>
                  </div>
                </div>
              </div>
              <div className="outlier-3">
                <div className="member-details">
                  <div className="member">
                    {/* avatar | name leader/member  */}
                    <div className="avatar">
                      <Avatar />
                    </div>
                    <div className="basic-info">
                      <p className="name">{user.team_leader}</p>
                      <p className="designation">{user.team_leader_email}</p>
                      <p className="designation">{user.team_leader_college}</p>
                    </div>
                  </div>
                  <div className="member">
                    <div className="avatar">
                      <Avatar />
                    </div>
                    <div className="basic-info">
                      <p className="name">{user.team_member_1}</p>
                      <p className="designation">{user.team_member_1_email}</p>
                      <p className="designation">
                        {user.team_member_1_college}
                      </p>
                    </div>
                  </div>
                  {user.team_member_2?
                  <div className="member">
                    <div className="avatar">
                      <Avatar />
                    </div>
                    <div className="basic-info">
                      <p className="name">{user.team_member_2}</p>
                      <p className="designation">{user.team_member_2_email}</p>
                      <p className="designation">
                        {user.team_member_2_college}
                      </p>
                    </div>
                  </div> : <></>}
                </div> 
                <div className="remaining-time">
                  <div className="timer">
                    <div className="timer-display">
                      <Timer
                        expiryTimestamp={time}
                        style={{
                          background: "transparent",
                          color: "white",
                          marginRight: ".2rem",
                        }}
                      />
                      <p style={{ color: "white", fontWeight: "500" }}>hrs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="countries-board">
              <div className="table-layout">
                <h4 style={{ color: "aquamarine" }}>Countries Captured</h4>
                <table>
                  <tbody>
                    <tr>
                      <th>Countries</th>
                    </tr>
                    {user.countries_captured && user.countries_captured.length && user.countries_captured.map((ele, index) => {
                      return (
                        <tr key={index}>
                          <td>{ele}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="overlay">
          <div className="overlay__inner">
            <div className="overlay__content">
              <span className="spinner"></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
