import React from 'react'

export default function Rules() {
    const ruleStyle = {
        color: '#e0b31d' // Set text color to #e0b31d
      };
    return (
        <>
            <div className='container my-3'>
                <h1 style={{ textAlign: "center", margin: "1rem 0", color: "#e0b31d" }}>Rules</h1>
            </div>
            <div className="container my-3">
                <br />
                <h5 style={{ color: "#e0b31d" }}>
                <p style={{fontWeight: "bold"}}>Round 1: DeCyber Quiz Extravaganza</p>
                In the initial round, teams will engage in a traditional quiz format, answering a series of
                questions to accumulate points. Correct responses will contribute to their overall score, while
                incorrect answers result in no points being awarded. This segment sets the foundation for the
                subsequent rounds and establishes an initial leaderboard.
                </h5>
                <h5 style={{ color: "#e0b31d" }}>
                <p style={{fontWeight: "bold"}}>Round 2: DeCyber Multimedia Challenge</p>
                Building on the foundation laid in Round 1, the second round introduces a dynamic
                multimedia element. Questions will be presented in various formats, including audio, images,
                and videos. Teams must adapt their knowledge and quick-thinking skills to respond
                accurately, earning points for correct answers and facing the consequences of errors. The
                multimedia dimension adds an extra layer of complexity, making this round both visually
                engaging and mentally demanding.
                </h5>
                <br />
                <h5 style={{ color: "#e0b31d" }}>
                Total Scores Calculation
                After the completion of the first two rounds, the cumulative scores of each team will be
                meticulously calculated after some modifications and recorded. The teams with 0 score in
                the first 2 round will recieve some buffer score so as to try to compete in the further rounds.
                The competitive spirit intensifies as teams position themselves for the ultimate challenge in
                the final round.
                </h5>
                <h5 style={{ color: "#e0b31d" }}>
                <p style={{fontWeight: "bold"}}>Round 3: Final War</p>DeCyber Capture the Company Challenge
                The climax of DeCyber unfolds in the captivating Capture the Company Challenge. Teams
                will compete to capture valuable points by strategically selecting companies aligned with
                their accumulated scores. Each question carries a unique point value which is determined by
                converting the given % share of the company into corresponding points, and teams must
                decide which company to pursue based on their point totals as any team can challenge for a
                question which is less than or equal to that question's point value . The challenge lies in both
                the diversity of questions and the limited time available. Teams can ascend the leaderboard or
                face the risk of falling behind as they strive to outsmart their opponents.
                The companies will be hidden under their respective countries of establishment and hovering
                over each country will give us a list of companies and their current status of being occupied
                or not occupied.
                </h5>
            </div>
        </>

    )
}