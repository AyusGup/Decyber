import React, { useContext, useEffect, useState } from "react";
import World from "./World.js";
import "../styles/worldmap.css";
import userContext from "../context/users/userContext";
import { useNavigate } from "react-router-dom";

const WorldMap = () => {
  let navigate = useNavigate();
  const user_detail = useContext(userContext);
  const { user, getUser } = user_detail;
  const [timeExpired, setTimeExpired] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // eslint-disable-next-line
      getUser();
    } else {
      // eslint-disable-next-line
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []); //[]means sirf ek baar yeh function chalega

  // Check if time is up


  useEffect(() => {
    const currentTime = new Date();
    const goalTime = new Date(currentTime);
    goalTime.setHours(17, 11, 0, 0); // Set to today 23:54

    const timeDifference = goalTime.getTime() - currentTime.getTime();
    if (timeDifference > 0) {
      const timeoutId = setTimeout(() => {
        setTimeExpired(true);
      }, timeDifference);

      return () => clearTimeout(timeoutId);
    } else {
      setTimeExpired(true); // Goal time already passed
    }
  }, []);

  return (
    <div className="WorldMap">
      {timeExpired ? (
        <div className="time-up-message">
          <h2>Your time is up!</h2>
          <p>Please wait for the results.</p>
        </div>
      ) : (
        <>
          <div className="labels d-flex flex-row justify-content-center align-items-center">
            <h5>
              Capturable Countries{" "}
              <div
                style={{
                  marginRight: "2rem",
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: "rgb(37, 219, 47)",
                  display: "inline-block",
                }}
              ></div>
            </h5>
            <h5>
              Not Enough Army Points to Capture Country{" "}
              <div
                style={{
                  marginRight: "2rem",
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: "crimson",
                  display: "inline-block",
                }}
              ></div>
            </h5>
            <h5>
              Non Participating Country{" "}
              <div
                style={{
                  marginRight: "2rem",
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: "#00394f",
                  display: "inline-block",
                }}
              ></div>
            </h5>
          </div>
          <World armypoints={user.ap} />
        </>
      )}
    </div>
  );
};

export default WorldMap;
