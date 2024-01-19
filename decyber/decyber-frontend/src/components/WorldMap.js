import React, { useContext, useEffect } from "react";
import World from "./World.js";
import "../styles/worldmap.css";
import userContext from "../context/users/userContext";
import { useNavigate } from "react-router-dom";

const WorldMap = () => {
  let navigate = useNavigate();

  const user_detail = useContext(userContext);
  const { user, getUser } = user_detail;

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
  return (
    <div className="WorldMap">
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
    </div>
  );
};
export default WorldMap;
