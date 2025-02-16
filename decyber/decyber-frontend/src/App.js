import "./App.css";
import { inject } from "@vercel/analytics";
import Navbar from "./components/Navbar";
import ArmyPoint from "./components/ArmyPoint";
import CountryPoint from "./components/CountryPoint";
import WorldMap from "./components/WorldMap";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserState from "./context/users/UserState";
import ArmyState from "./context/army_questions/ArmyState";
import CountryState from "./context/country_questions/CountryState";
import ScoreboardState from "./context/scoreboard/ScoreboardState";
import Alert from "./components/Alert";
import About from "./components/About";
import Memories from "./components/Memories";
import Rules from "./components/Rules";
import React, { useState } from "react";
import Leaderboard from "./components/Leaderboard";
import Sidebar from "./components/Sidebar";
import CountrySlide from "./components/CountrySlide";
import Round2 from "./components/Round2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageGuesser from "./components/ImageGuesser";
import Grid from "./components/Grid";
import ThankYou from "./components/ThankYou";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, display) => {
    setAlert({
      theme: type,
      message: display,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  inject(); //from vercel analytics
  const targetTime = new Date("2025/02/15 17:10:00"); //yaha apni ichha se date na daalein, event ko follow karein pls, warna aditya bhaiya fukc karenge apko
  const currentTime = new Date();
  const time = new Date();
  time.setMilliseconds(targetTime - currentTime);

  return (
    // all under JSX fragment(<> & </>) as we need to pass only one element in the return();
    <>
    <video autoPlay loop muted playsInline className="background-video">
        <source src="/public/bg.mp4" type="video/mp4" />
    </video>
      <UserState>
        <CountryState>
          <ArmyState>
            <ScoreboardState>
              <BrowserRouter>
                <Alert alert={alert} />
                <Navbar showAlert={showAlert} />
                <div className="below-navcontent">
                  <Sidebar />
                  <div className="sideContent" style={{ overflow: 'hidden', overflowY: 'auto'  }}>
                    <Routes>
                      <Route exact path="/" element={<WorldMap />} />
                     {/* <Route
                        exact
                        path="/ap"
                        element={<ArmyPoint showAlert={showAlert} />}
                      /> */}
                      <Route
                        exact
                        path="/CountrySlide/:idx"
                        element={<CountrySlide />}
                      />
                      <Route
                        exact
                        path="/cp/:country"
                        element={<CountryPoint showAlert={showAlert} />}
                      />
                      <Route exact path="/about" element={<About />} />
                      <Route exact path="/memories" element={<Memories />} />
                      <Route exact path="/rules" element={<Rules />} />
                      <Route
                        exact
                        path="/leaderboard"
                        element={<Leaderboard />}
                      />
                      <Route
                        exact
                        path="/dashboard"
                        element={<Dashboard time={time} />}
                      />
                      <Route
                        exact
                        path="/login"
                        element={<Login showAlert={showAlert} />}
                      />
                      <Route
                        exact
                        path="/signup"
                        element={<Signup showAlert={showAlert} />}
                      />
                      <Route
                        exact
                        path="/*"
                        element={<Signup showAlert={showAlert} />}
                      />
                      <Route exact path="/round2" element={<Round2 />} />
                      <Route exact path="/imageguesser" element={<ImageGuesser />} />
                      <Route exact path="/grid" element={<Grid />} />
                      <Route exact path="/thank-you" element={<ThankYou/>} />
                    </Routes>
                  </div>
                </div>
              </BrowserRouter>
            </ScoreboardState>
          </ArmyState>
        </CountryState>
      </UserState>
    </>
  );
}

export default App;
