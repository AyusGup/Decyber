import React, { useContext, useState, useEffect } from 'react'
import userContext from '../context/users/userContext';
import "../styles/dashboard.css"
import { Avatar } from '../icons';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import scoreboardContext from '../context/scoreboard/scoreboardContext';

export default function Dashboard({ time }) {
  let navigate = useNavigate();
  const user_detail = useContext(userContext);
  const { user, loader, getUser } = user_detail;
  const scoreboard = useContext(scoreboardContext);
  const { usersScores, getScores } = scoreboard;
  // const [usersScores, setusersScores] = useState([])
  // const rankCalculator = () => {
  //   setusersScores(() => {

  //     return list;
  //   });
  // }
  const myrank = (usersScores.length !== 0) ? usersScores.find((ele) => ele.team_name === user.team_name).rank : 0;
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
      //eslint-disable-next-line
    }
    else {
      getUser();
      getScores();
      // rankCalculator();
      //eslint-disable-next-line
    }
  }, [])
  return (
    <>
      {!loader ? <div className='Dashboard'>
        <div className="team-name-header">
          <h1 style={{ textAlign: "center", margin: "1rem 0", color: "lightgreen" }}>{user.team_name}</h1>
        </div>
        <div className="dashboard-outlier d-flex justify-content-center align-items-center">
          <div className="outlier-2 d-flex flex-column justify-content-center align-items-center" >
            <div className="user-status">
              <div className="country-points db-props">
                <div className="cps">
                  <div>
                    <h4>{user.cp}</h4>
                  </div>
                </div>
                <p>Your Country Points</p>
              </div>
              <div className="army-points db-props">
                <div className="aps">
                  <div>
                    <h4>{user.ap}</h4>
                  </div>
                </div>
                <p>Your Army Points</p>
              </div>
              <div className="rank db-props">
                <div className="rank-props">
                  <h4>{usersScores.length && myrank.toString()}{myrank !== 1 ? (myrank !== 2 ? ((myrank !== 3) ? "th" : "rd") : "nd") : "st"}</h4>
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
                    <p className="designation">{user.team_member_1_college}</p>
                  </div>
                </div>
              </div>
              <div className="remaining-time">
                <div className="timer">
                  <div className="timer-display">
                    <Timer expiryTimestamp={time} style={{ background: "transparent", color: "white", marginRight: ".2rem" }} />
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
                  {user.countries_captured.map((ele, index) => {
                    return <tr key={index}>
                      <td>{ele}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> : <div className="overlay">
        <div className="overlay__inner">
          <div className="overlay__content"><span className="spinner"></span></div>
        </div>
      </div>}
    </>
  )
}
