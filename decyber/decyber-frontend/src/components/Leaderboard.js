import React, { useContext, useState, useEffect } from 'react'
import "../styles/leaderboard.css"
import scoreboardContext from '../context/scoreboard/scoreboardContext';
export default function Leaderboard() {
    const scoreboard = useContext(scoreboardContext);
    const { usersScores, getScores } = scoreboard;
    useEffect(() => {
        getScores();
        //eslint-disable-next-line
    }, [])
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="leader-board">
                <div className="table-layout">
                    <h1 style={{ textAlign: "center", margin: "1rem 0", color: "lightgreen" }}>Scoreboard</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Points</th>
                            </tr>
                            {usersScores.map((ele, index) => {
                                return <tr key={index}>
                                    <td>{ele.rank}</td>
                                    <td>{ele.team_name}</td>
                                    <td>{ele.cp}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}