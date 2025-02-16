import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialGridState = [
  { id: "A1", clue: "Start here!", answer: "", unlocked: true, correct: false, showClue: false },
  { id: "A2", clue: "Clue for A2", answer: "answer2", unlocked: true, correct: false, showClue: false },
  { id: "B1", clue: "Clue for B1", answer: "answerB1", unlocked: true, correct: false, showClue: false },
  { id: "B2", clue: "Clue for B2", answer: "answerB2", unlocked: true, correct: false, showClue: false },
  // Add more grid cells here with their respective clues and answers
];

const Grid = () => {
  const [grid, setGrid] = useState(initialGridState);
  const [selectedBox, setSelectedBox] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handlePlay = () => {
    const updatedGrid = grid.map((box) => (box.id === "A1" ? { ...box, showClue: true } : box));
    setGrid(updatedGrid);
    setSelectedBox(grid[0]);
  };

  const handleBoxClick = (id) => {
    if (gameOver) return;
    console.log("Box clicked:", id);
    const selected = grid.find((box) => box.id === id);
    if (selected.unlocked) {
      setSelectedBox(selected);
      setUserAnswer("");
    }
  };

  const handleSubmitAnswer = () => {
    console.log("Submit answer clicked");
    console.log("Selected box:", selectedBox);
    if (!selectedBox) return;
    console.log("User answer:", userAnswer);
    if (userAnswer.toLowerCase() === selectedBox.answer.toLowerCase()) {
      const newGrid = grid.map((box) =>
        box.id === selectedBox.id
          ? { ...box, correct: true, showClue: true }
          : box
      );
      console.log("Correct answer!");
      
      setGrid(newGrid);
      setScore(score + 1);
      setSelectedBox(null);

      // Check for win condition
      if (newGrid.every((box) => box.correct)) {
        setGameOver(true);
      }
    } else {
      // setGameOver(true);
    }
  };

  return (
    <div className="grid-game-container">
      <button className="play-button" onClick={handlePlay}>
        PLAY QUIZ
      </button>
      <div className="score-timer-container">
        <div>Score: {score}/30</div>
        <div>Timer: 20:00</div>
      </div>
      <div className="grid-container">
        {grid.map((box) => (
          <div
            key={box.id}
            className={`grid-box ${box.unlocked ? "unlocked" : ""} ${box.correct ? "correct" : ""}`}
            onClick={() => handleBoxClick(box.id)}
          >
            {box.id}
            {box.showClue && <p className="clue-text">{box.clue}</p>}
          </div>
        ))}
      </div>

      {selectedBox && !gameOver && (
        <div className="clue-container">
          <p>{selectedBox.clue}</p>
          <input
            className="input-answer"
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter answer"
          />
          <button onClick={handleSubmitAnswer}>Submit</button>
        </div>
      )}

      {gameOver && (
        <div className="game-over-container">
          <h2>{score === 30 ? "Congratulations, you won!" : "You Lose!"}</h2>
          <Link to="/thank-you">
            <button className="next-button">Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Grid;
