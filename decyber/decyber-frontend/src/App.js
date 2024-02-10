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
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  const targetTime = new Date("2023/02/15 13:00:00");
  const currentTime = new Date();
  const time = new Date();
  time.setMilliseconds(targetTime - currentTime);

  return (
    // all under JSX fragment(<> & </>) as we need to pass only one element in the return();
    <>
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
<<<<<<< HEAD
                      {/* <Route
=======
                     {/* <Route
>>>>>>> d30ea038f7625feee329a3415285d20b66122f88
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
