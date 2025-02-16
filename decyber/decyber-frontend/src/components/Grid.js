import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/grid.css";

const initialGridState = [
  {id: "mr. clever", answer: "A", clue: "Men in corners are alive. No 2 liars can see each other", unlocked: true, correct: false, showClue: false},
  {id: "mr. lazy", answer: "A", clue: "If column 1 has 4 victims, the murderer is in row 6", unlocked: true, correct: false, showClue: false},
  {id: "mr. small", answer: "A", clue: "Mr. Clever and Mr. Lazy are victims", unlocked: true, correct: false, showClue: false},
  {id: "mr. tall", answer: "A", clue: "If column 1 has 1 or 2 victims, the murderer is in row 4", unlocked: true, correct: false, showClue: false},
  {id: "mr. strong", answer: "A", clue: "Mr. Silly, Mr. Small, and Mr. Clever are alive", unlocked: true, correct: false, showClue: false},
  {id: "mr. tickle", answer: "V", clue: "I can see the murderer!", unlocked: true, correct: false, showClue: false},
  {id: "mr. rude", answer: "A", clue: "Did you think it was me?", unlocked: true, correct: false, showClue: false},
  {id: "mr. funny", answer: "A", clue: "Column 4 has 1 victim", unlocked: true, correct: false, showClue: false},
  {id: "mr. mean", answer: "M", clue: "Murderer!!", unlocked: true, correct: false, showClue: false},
  {id: "mr. cool", answer: "V", clue: "I can see the murderer!", unlocked: true, correct: false, showClue: false},
  {id: "mr. happy", answer: "A", clue: "Mr. Tall is not alive, and there is a liar in this column", unlocked: true, correct: false, showClue: false},
  {id: "mr. grumpy", answer: "A", clue: "I am adjacent to 4 alive Men", unlocked: true, correct: false, showClue: false},
  {id: "mr. noisy", answer: "V", clue: "I can see the murderer!", unlocked: true, correct: false, showClue: false},
  {id: "mr. bounce", answer: "A", clue: "I am adjacent to 5 victims", unlocked: true, correct: false, showClue: false},
  {id: "mr. clumsy", answer: "A", clue: "Mr. Clever and Mr. Clumsy are victims", unlocked: true, correct: false, showClue: false},
  {id: "mr. chatterbox", answer: "V", clue: "I can see the murderer!", unlocked: true, correct: false, showClue: false},
  {id: "mr. perfect", answer: "A", clue: "Mr. Perfect is alive", unlocked: true, correct: false, showClue: false},
  {id: "mr. messy", answer: "V", clue: "Each row has at least 2 victims", unlocked: true, correct: false, showClue: false},
  {id: "mr. quiet", answer: "A", clue: "Column 2 has exactly 1 victim", unlocked: true, correct: false, showClue: false},
  {id: "mr. uppity", answer: "V", clue: "Mr. Strong is not alive", unlocked: true, correct: false, showClue: false},
  {id: "mr. snow", answer: "V", clue: "This row has 3 alive Men", unlocked: true, correct: false, showClue: false},
  {id: "mr. silly", answer: "A", clue: "The 3 Men that Mr. Tickle and I are both adjacent to are victims", unlocked: true, correct: false, showClue: false},
  {id: "mr. slow", answer: "A", clue: "The 3 Men that Mr. Rude and I are both adjacent to are victims", unlocked: true, correct: false, showClue: false},
  {id: "mr. rush", answer: "V", clue: "This column has 2 victims", unlocked: true, correct: false, showClue: false},
  {id: "mr. worry", answer: "A", clue: "Mr. Silly is alive", unlocked: true, correct: false, showClue: false},
  {id: "mr. topsy-turvy", answer: "V", clue: "Mr. Uppity is not a victim", unlocked: true, correct: false, showClue: false},
  {id: "mr. forgetful", answer: "V", clue: "Mr. Cool is alive", unlocked: true, correct: false, showClue: false},
  {id: "mr. nervous", answer: "A", clue: "Mr. Silly and Mr. Small are alive", unlocked: true, correct: false, showClue: false},
  {id: "mr. sneeze", answer: "V", clue: "Mr. Sneeze is alive", unlocked: true, correct: false, showClue: false},
  {id: "mr. jelly", answer: "A", clue: "Mr. Silly and Mr. Small are alive", unlocked: true, correct: false, showClue: false}
];
const Grid = ({ timeLimit = 1800 }) => {
  const [grid, setGrid] = useState(initialGridState);
  const [selectedBox, setSelectedBox] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    parseInt(localStorage.getItem("timeLeft") || timeLimit, 10)
  );

  const navigate = useNavigate();

  // Timer Logic
  useEffect(() => {
    localStorage.setItem("timeLeft", timeLeft);
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          localStorage.setItem("timeLeft", prevTime - 1);
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    } else {
      navigate("/thank-you");
    }
  }, [timeLeft, navigate]);

  // Start Game
  const handlePlay = () => {
    const updatedGrid = grid.map((box) =>
      box.id === "mr. clever" ? { ...box, showClue: true } : box
    );
    setGrid(updatedGrid);
    setSelectedBox(grid[0]);
  };

  const handleBoxClick = (id) => {
    if (gameOver) return;
    const selected = grid.find((box) => box.id === id);
    if (selected?.unlocked) {
      setSelectedBox(selected);
      setUserAnswer("");
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedBox) return;
    if (userAnswer.toLowerCase() === selectedBox.answer.toLowerCase()) {
      const newGrid = grid.map((box) =>
        box.id === selectedBox.id
          ? { ...box, correct: true, showClue: true }
          : box
      );
      setGrid(newGrid);
      setScore((prev) => prev + 1);
      setSelectedBox(null);

      if (newGrid.every((box) => box.correct)) {
        setGameOver(true);
      }
    }
  };

  return (
    <div className="grid-game-container">
      <button className="play-button" onClick={handlePlay}>
        PLAY QUIZ
      </button>
      <div className="score-timer-container">
        <div>Score: {score}/30</div>
        <div>
          <p className="timer">
            Time Left: {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </p>
        </div>
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
          <Link to="/">Play Again</Link>
        </div>
      )}
    </div>
  );
};

export default Grid;
