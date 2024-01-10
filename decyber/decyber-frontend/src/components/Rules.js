import React from 'react'

export default function Rules() {
    return (
        <>
            <div className='container my-3'>
                <h1 style={{ textAlign: "center", margin: "1rem 0", color: "cyan" }}>Rules</h1>
            </div>
            <div className="container my-3">
                <br />
                <h5 style={{ color: "cyan" }}>
                    1. There will be a single map which will be common for all the players.
                </h5>
                <h5 style={{ color: "cyan" }}>
                    2. Players can capture countries by breaking their defense (1 question) and having the required army points.
                </h5>
                <h5 style={{ color: "cyan" }}>
                    3. Capturing a country will award some country points, each country will have different points depending on the level of difficulty.
                </h5>
                <h5 style={{ color: "cyan" }}>
                    4. However, capturing a country will reduce your army points.
                </h5>
                <h5 style={{ color: "cyan" }}>
                    5. Teams will have to rebuild the army(army points) by solving an extra set of questions which will only consist of simple puzzles.
                </h5>
                <h5 style={{ color: "cyan" }}>
                    6. Once a country is captured, it cannot be captured by any other teams.
                </h5>
                <h5 style={{ color: "cyan" }}>
                    7. The team with the most country points at the end of the event will be declared the winner.
                </h5>
            </div>
        </>

    )
}