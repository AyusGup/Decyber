import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userContext from '../context/users/userContext';
import countryContext from '../context/country_questions/countryContext';
import "../styles/countrypoint.css"
import { useNavigate } from 'react-router-dom';

const CountryPoint = (props) => {
  let navigate = useNavigate();
  let { country } = useParams();

  const user_detail = useContext(userContext);
  const { user, getUser, updateUser, updateCountryData } = user_detail;

  const country_detail = useContext(countryContext);
  const { cpq, loader, getcpq, getsinglecpq, checkcpq, updatecpq } = country_detail;

  const updatePoints = async ({ ans, points }) => {
    // const question = cpq[0];
    const updatedCountryQuestion = await getsinglecpq(country); // fresh question fetched from the backend
    if (updatedCountryQuestion.type) {
      props.showAlert("danger", "Someone has done it earlier");
      return;
    }
    if (await checkcpq(updatedCountryQuestion.code, ans.toLowerCase().replace(/\s/g, ""))) {
      // update the points of the team if the answer matches correctly
      const newap = user.ap - 35;
      const newcp = user.cp + points;
      updateUser(newap, newcp);
      updateCountryData(updatedCountryQuestion.name);
      props.showAlert("success", `${points} Countrypoints added successfuly`);
      updatecpq(updatedCountryQuestion.code, 1);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
    else {
      props.showAlert("danger", `Wrong Answer`);
    }
  }

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value)
  }
  const clearText = () => {
    setText("");
  }
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
      // eslint-disable-next-line
    }
    else {
      getcpq(country);
      getUser();
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {!loader ? <div className="CountryPoint">
        <h1 style={{ textAlign: "center", margin: "1rem 0", color: "lightgreen" }}>{country}</h1>
        <div className='cp-content d-flex justify-content-center'>
          {!cpq[0].type ? <div className='cp-subcontent'>
            <div className="question">
              <h5 className="question-pallete" dangerouslySetInnerHTML={{ __html: 'Ques. ' + cpq[0].ques }}></h5>
              <div className='points-display' style={{ backgroundColor: "transparent", height: "1.8rem", borderRadius: ".5rem" }}>
                <h5 className="points-pallete">Pts. {cpq[0].pts}</h5>
              </div>
            </div>
            {cpq[0].link !== "#" && <p className="question-pallete" style={{ textAlign: "center" }}><a href={cpq[0].link} rel="noreferrer" target="_blank" style={{ textDecoration: "none" }}>Link</a></p>}
            <textarea name="answer" id="answer" rows="2" value={text} onChange={onChange} placeholder='Write your answer here'></textarea>
            <div style={{ width: "75%", marginTop: "1rem", backgroundColor: "transparent" }}>
              <button className="btn btn-danger me-3" style={{ width: "40%" }} onClick={clearText}>Clear</button>
              <button className="btn btn-success" style={{ width: "40%" }} onClick={() => {
                updatePoints({ ans: text, points: cpq[0].pts });
              }} >Submit</button>
            </div>
          </div> : <div className='d-flex align-items-center' style={{ fontSize: '30px', backgroundColor: "transparent" }}><h5 className='question-pallete'>This company has been captured !</h5></div>}
        </div>
      </div> : <div className="overlay">
        <div className="overlay__inner">
          <div className="overlay__content"><span className="spinner"></span></div>
        </div>
      </div>}
    </>
  );
}
export default CountryPoint;