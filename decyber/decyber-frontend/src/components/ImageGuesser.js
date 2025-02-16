import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
const path = "../../public/";
const images = [
   "image19.jpg","image20.jpg", "image2.png", "image3.png", "image4.png","image18.png", "image1.jpg",
    "image5.png", "image6.png", "image7.png",
    "image8.png", "image9.png", "image10.png",
    "image11.png", "image12.png", "image13.jpg",
    "image14.jpg", "image15.png", "image16.jpg",
    "image17.jpg", "image21.png", "image22.png",
"image23.png", "image24.png", "image25.png",
"image26.png", "image27.png", "image28.png",
"image29.png", "image30.png"
]
// for(let i=0;i<images.length;i++) {
//     images[i] = path+images[i];
// }
console.log(images);
const answers = [
     "Taarak Mehta Ka Ooltah Chashmah", "Balika Vadhu","Kuch Rang Pyar Ke Aise Bhi", "Anupamaa", "Sarabhai vs Sarabhai", "Made in Heaven","Rocket Boys", "Panchayat", "Inside Edge", "Gullak", "Desi Girl", "Ek Chatur Naar Badi Hoshiyaar", "Achchi Lagti Ho", "Papa Kehte Hain", "Chak Dhoom Dhoom", "Andhadhun", "Life in a... Metro", "Thappad", "English Vinglish", "Dil Se..", "Damini", "Ajnabee","Deewar","Ishq","Masaan",
     "Ae Dil Hai Mushkil","Dilwale Dulhania Le Jayenge","Krrish","Hum Saath - Saath Hain","Shaandaar"
];
const ImageGuesser = ({ timeLimit = 1800 }) => {
    const navigate = useNavigate();
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
        } else {
            navigate("/thank-you");
        }
    }, [timeLeft, navigate]);

    useEffect(() => {
        localStorage.setItem("score", score);
        localStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
        if (Object.keys(answeredQuestions).length === images.length) {
            navigate("/thank-you");
        }
    }, [score, answeredQuestions, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (answeredQuestions[currentIndex]) return;

        if (userInput.toLowerCase().trim() === answers[currentIndex].toLowerCase().trim()) {
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
console.log(localStorage.getItem("answeredQuestions"));
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
