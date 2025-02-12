import React, { useState, useEffect } from "react";
import "../App.css";
const path = "../../public/";
const images = [
    // Replace with actual image file paths
    "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg",
    "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg",
    "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg",
    "image16.jpg", "image17.jpg", "image18.jpg", "image19.jpg", "image20.jpg"
];
for(let i in images){
    i=path+i;
}

const answers = [
    // Replace with actual correct answers for each image
    "stree 2", "phir aayi hasseen dilruba", "ctrl", "raanjhanaa", "answer5",
    "answer6", "answer7", "answer8", "answer9", "answer10",
    "answer11", "answer12", "answer13", "answer14", "answer15",
    "answer16", "answer17", "answer18", "answer19", "answer20"
];

const ImageGuesser = ({ timeLimit = 1800 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [score, setScore] = useState(parseInt(localStorage.getItem("score")) || 0);
    const [timeLeft, setTimeLeft] = useState(
        parseInt(localStorage.getItem("timeLeft")) || timeLimit
    );
    const [answeredQuestions, setAnsweredQuestions] = useState(
        JSON.parse(localStorage.getItem("answeredQuestions")) || {}
    );
    const [message, setMessage] = useState("");

    useEffect(() => {
        localStorage.setItem("timeLeft", timeLeft);
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => {
                    localStorage.setItem("timeLeft", prevTime - 1);
                    return prevTime - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    useEffect(() => {
        localStorage.setItem("score", score);
        localStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
    }, [score, answeredQuestions]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (answeredQuestions[currentIndex]) return;

        if (userInput.toLowerCase().trim() === answers[currentIndex].toLowerCase()) {
            setScore(prevScore => prevScore + 1);
            setAnsweredQuestions(prev => {
                const updated = { ...prev, [currentIndex]: true };
                localStorage.setItem("answeredQuestions", JSON.stringify(updated));
                return updated;
            });
            setMessage("Correct!");
        } else {
            setMessage("Wrong answer, try again!");
            return;
        }
        setUserInput("");
        handleNext();
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setMessage("");
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setMessage("");
        }
    };

    const handleQuestionSelect = (index) => {
        setCurrentIndex(index);
        setMessage("");
    };

    return (
        <div className="image-guesser-container">
            <h1>Image Guesser - Round 2</h1>
            <p className="question-progress">Question: {currentIndex + 1}/{images.length}</p>
            <p className="score">Score: {score}</p>
            <p className="timer">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
            <img className="quiz-image" src={images[currentIndex]} alt="Guess the image" />
            <form className="answer-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter your answer"
                    className="answer-input"
                    disabled={answeredQuestions[currentIndex]}
                />
                <button className="submit-btn" type="submit" disabled={answeredQuestions[currentIndex]}>Submit</button>
            </form>
            {message && <p className="message">{message}</p>}
            <div className="nav-buttons">
                <button className="back-btn" onClick={handleBack} disabled={currentIndex === 0}>Back</button>
                <button className="next-btn" onClick={handleNext} disabled={currentIndex === images.length - 1}>Next</button>
            </div>
            <div className="question-navigation">
                {images.map((_, index) => (
                    <button 
                        key={index} 
                        className={`question-number ${answeredQuestions[index] ? 'answered' : ''} ${currentIndex === index ? 'current' : ''}`} 
                        onClick={() => handleQuestionSelect(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

 
export default ImageGuesser;
