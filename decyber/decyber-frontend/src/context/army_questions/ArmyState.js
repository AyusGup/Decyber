import React, { useState } from "react";
import ArmyContext from "./armyContext";

const ArmyState = (props) => {
    // const host = "http://localhost:8000";
    const host = "https://decyber-backend.vercel.app";
    const [loader, setLoader] = useState(false)
    const apqItem = [{
        "type": 0,
        "qid": 0,
        "ques": "Demo?",
        "pts": 50
    }]
    const [apq, setApq] = useState(apqItem);

    // Get all army questions
    const getapq = async () => {
        // API Call
        setLoader(true)
        let url = `${host}/api/ap_questions/fetchAllap_questions`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        setApq(json);
        setLoader(false)
    }
    // Get single army questions
    const getsingleapq = async (qid) => {
        // API Call
        setLoader(true)
        let url = `${host}/api/ap_questions/fetchsingleap_questions/${qid}`;
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
    const checkapq = async (qid, ans) => {
        // API Call
        setLoader(true)
        let url = `${host}/api/ap_questions/checkAPQ`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ qid, ans })
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
    // Update army question
    const updateapq = async (qid, type) => {
        // API Calls
        setLoader(true)
        let url = `${host}/api/ap_questions/updateAPQ`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ qid, type })
        });
        const json = await response.json();

        let newAPQ = JSON.parse(JSON.stringify(apq));
        // Logic to update
        for (let index = 0; index < newAPQ.length; index++) {
            const element = newAPQ[index];
            if (element.qid === qid) {
                newAPQ[index].type = type;
                break;
            }
        }
        setApq(newAPQ);
        setLoader(false)
    }

    return (
        <ArmyContext.Provider value={{ apq,loader, getapq, getsingleapq, checkapq, updateapq }}>
            {props.children}
        </ArmyContext.Provider>
    )
}

export default ArmyState;