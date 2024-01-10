import React, { useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
  // const host = "http://localhost:8000";
  const host = "https://decyber-backend.vercel.app";
  let userItem = [];
  const [user, setUser] = useState(userItem);
  const [loader, setLoader] = useState(false)

  // Get user details
  const getUser = async () => {
    // API Calls
    setLoader(true)
    let url = `${host}/api/auth/getUser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json();
    setUser(json);
    setLoader(false)

  }

  // Update user details
  const updateUser = async (ap, cp) => {
    // API Calls
    setLoader(true)
    let url = `${host}/api/auth/updateUser`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ ap, cp })
    });
    const json = await response.json();
    const newUser = json;

    // Logic to update
    newUser.ap = ap;
    newUser.cp = cp;

    setUser(newUser);
    setLoader(false)
  }

  // Update country_captured data of the user
  const updateCountryData = async (name) => {
    // API Calls
    setLoader(true)
    let url = `${host}/api/auth/updateCountryData`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ name })
    });
    const json = await response.json();
    setUser(json);
    setLoader(false)
  }
  return (
    <userContext.Provider value={{ user, loader, getUser, updateUser, updateCountryData }}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserState;