import React from 'react'

export default function Rules() {
    const ruleStyle = {
        color: 'cyan' // Set text color to cyan
      };
    return (
        <>
            <div className='container my-3'>
                <h1 style={{ textAlign: "center", margin: "1rem 0", color: "cyan" }}>Rules</h1>
            </div>
            <div className="container my-3">
                <br />
                <ol>
        <li>
          <strong style={ruleStyle}>Round 1: DeCyber Quiz Extravaganza</strong>
          <ul>
            <li style={ruleStyle}>Teams answer a series of traditional quiz questions.</li>
            <li style={ruleStyle}>Correct answers contribute to the team's overall score.</li>
            <li style={ruleStyle}>Incorrect answers result in no points being awarded.</li>
            <li style={ruleStyle}>The round establishes an initial leaderboard.</li>
          </ul>
        </li>
        <li>
          <strong style={ruleStyle}>Round 2: DeCyber Multimedia Challenge</strong>
          <ul>
            <li style={ruleStyle}>Questions presented in various formats: audio, images, videos.</li>
            <li style={ruleStyle}>Teams must adapt knowledge and quick-thinking skills.</li>
            <li style={ruleStyle}>Points awarded for correct answers, with consequences for errors.</li>
            <li style={ruleStyle}>Adds complexity with multimedia elements.</li>
          </ul>
        </li>
        <li>
          <strong style={ruleStyle}>Total Scores Calculation</strong>
          <ul>
            <li style={ruleStyle}>Cumulative scores from Rounds 1 and 2 are meticulously calculated.</li>
            <li style={ruleStyle}>Teams with 0 score receive a buffer score to compete in further rounds.</li>
          </ul>
        </li>
        <li>
          <strong style={ruleStyle}>Round 3: DeCyber Capture the Company Challenge</strong>
          <ul>
            <li style={ruleStyle}>Teams compete to capture points by selecting companies.</li>
            <li style={ruleStyle}>Each company's % share converted into corresponding points.</li>
            <li style={ruleStyle}>Teams must strategically choose companies to pursue based on point totals.</li>
            <li style={ruleStyle}>Challenge lies in diverse questions and limited time.</li>
          </ul>
        </li>
        <li>
          <strong style={ruleStyle}>Determining the DeCyber Champion</strong>
          <ul>
            <li style={ruleStyle}>Team with highest total points at the end of Round 3 wins.</li>
            <li style={ruleStyle}>In case of a tie, the team with more correctly answered questions wins.</li>
            <li style={ruleStyle}>Combines intellectual rigour and strategic prowess.</li>
          </ul>
        </li>
      </ol>
            </div>
        </>

    )
}