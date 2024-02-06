import React, { useState } from "react";
import CountryContext from "./countryContext";

const CountryState = (props) => {
    // const host = "http://localhost:8000";
    const host = "http://localhost:8000";
    const cpqItem = [{
        "type": 0,
        "code": "DEFAULT",
        "name": "Default Country",
        "ques": "Demo?",
        "pts": 50,
        "ans": "nothing"
    }]
    const [cpq, setCpq] = useState(cpqItem);
    const [loader, setLoader] = useState(false)
    // Get all country questions
    const getcpq = async (country) => {
        // API Call
        setLoader(true)
        let url = `${host}/api/cp_questions/fetchcp_question/${country}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        setCpq(json);
        setLoader(false)
        return json[0];
    }
    // Get single country question
    const getsinglecpq = async (country) => {
        // API Call
        setLoader(true)
        let url = `${host}/api/cp_questions/fetchsinglecp_question/${country}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        setLoader(false)
        return json[0];
    }
    // Check whether answer is correct or not from backend
    const checkcpq = async (code, ans) => {
        // API Call
        console.log(ans);
        setLoader(true)
        let url = `${host}/api/cp_questions/checkCPQ`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ code, ans })
        });
        const json = await response.json();
        setLoader(false)
        if (json.success) {
            return 1;   // right answer
        }
        else {
            return 0;   // wrong answer
        }

    }
    // Update country question
    const updatecpq = async (code, type) => {
        // API Calls
        setLoader(true);
        let url = `${host}/api/cp_questions/updateCPQ`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ code, type })
        });
        const json = await response.json();

        let newCPQ = JSON.parse(JSON.stringify(cpq));
        // Logic to update
        for (let index = 0; index < newCPQ.length; index++) {
            const element = newCPQ[index];
            if (element.code === code) {
                newCPQ[index].type = type;
                break;
            }
        }
        setCpq(newCPQ);
        setLoader(false)
    }

    return (
        <CountryContext.Provider value={{ cpq,loader, getcpq, getsinglecpq, checkcpq, updatecpq }}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryState;