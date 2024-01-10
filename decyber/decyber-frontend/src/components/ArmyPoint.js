import React, { useContext, useState, useEffect } from 'react';
import userContext from '../context/users/userContext';
import armyContext from '../context/army_questions/armyContext';
import "../styles/armypoint.css"
import { useNavigate } from 'react-router-dom';

const ArmyPoint = (props) => {
  let navigate = useNavigate();
  const user_detail = useContext(userContext);
  const { user, getUser, updateUser } = user_detail;

  const army_detail = useContext(armyContext);
  const { apq, getapq, loader, getsingleapq, checkapq, updateapq } = army_detail;

  const updatePoints = async ({ ques_id, ans, points }) => {
    const question = apq.find((question) => question.qid === ques_id); // find is a js function to search for an element in an array
    const updatedQuestion = await getsingleapq(question.qid); //fetching fresh question from the backend
    if (updatedQuestion.type) {
      props.showAlert("danger", "Someone has done it earlier");
      return;
    }
    if (await checkapq(updatedQuestion.qid, ans.toLowerCase().replace(/\s/g, ""))) {
      // update the points of the team if the answer matches correctly
      const newap = user.ap + points;
      const newcp = user.cp + 0;
      updateUser(newap, newcp);
      props.showAlert("success", `${points} Armypoints added successfully`);
      updateapq(updatedQuestion.qid, 1);
      setTimeout(() => {
        // window.location.reload();
        navigate('/');
      }, 2000);
    }
    else {
      props.showAlert("danger", `Wrong Answer`);
    }
  }
  const [text, setText] = useState("")

  const onChange = (e) => {
    setText(e.target.value);
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
      getapq();
      getUser();
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {!loader ? <div className="ArmyPoint">
        <div className="ap-box">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='carousel-content d-flex justify-content-center align-items-baseline'>
                  {apq.length ? <div className='carousel-subcontent question-section'>
                    <div className="question">
                      <h5 className="question-pallete" id="main-ques" dangerouslySetInnerHTML={{ __html: apq[0].qid + '. ' + apq[0].ques }}></h5>
                      <div className='points-display' style={{ backgroundColor: "transparent", height: "1.8rem", borderRadius: ".5rem" }}>
                        <h5 className="points-pallete">Pts. {apq[0].pts}</h5>
                      </div>
                    </div>
                    {apq[0].link !== "#" && <h5 className="question-pallete" style={{ textAlign: "center" }}><a href={apq[0].link} rel="noreferrer" target="_blank" style={{ textDecoration: "none" }}>Link</a></h5>}
                    <textarea name="answer" id="answer" rows="2" value={text} onChange={onChange} placeholder='Write your answer here'></textarea>
                    <div style={{ width: "75%", marginTop: "1rem", backgroundColor: 'transparent' }}>
                      <button className="btn btn-danger me-3" style={{ width: "40%" }} onClick={clearText}>Clear</button>
                      <button className="btn btn-success" style={{ width: "40%" }} onClick={() => {
                        updatePoints({ ques_id: apq[0].qid, ans: text, points: apq[0].pts });
                      }} >Submit</button>
                    </div>
                  </div> : <div className='carousel-subcontent question-section question-pallete text-center' style={{ marginTop: "175px" }}> All Army Points has been looted.</div>}
                </div>
              </div>

              { // eslint-disable-next-line
                apq.length && apq.map((ele, index) => {
                  if (index !== 0) {
                    return <div className="carousel-item" key={index}>
                      <div className='carousel-content d-flex justify-content-center align-items-baseline'>
                        <div className='carousel-subcontent question-section'>
                          <div className="question">
                            <h5 className="question-pallete" id="main-ques" dangerouslySetInnerHTML={{ __html: ele.qid + '. ' + ele.ques }}></h5>
                            <div className='points-display' style={{ backgroundColor: "transparent", height: "1.8rem", borderRadius: ".5rem" }}>
                              <h5 className="points-pallete">Pts. {ele.pts}</h5>
                            </div>
                          </div>
                          {ele.link !== "#" && <h5 className="question-pallete" style={{ textAlign: "center" }}><a href={ele.link} rel="noreferrer" target="_blank" style={{ textDecoration: "none" }}>Link</a></h5>}
                          <textarea name="answer" id="answer" rows="2" value={text} onChange={onChange} placeholder='Write your answer here'></textarea>
                          <div style={{ width: "75%", marginTop: "1rem", backgroundColor: "transparent" }}>
                            <button className="btn btn-danger me-3" style={{ width: "40%" }} onClick={clearText}>Clear</button>
                            <button className="btn btn-success" style={{ width: "40%" }} onClick={() => {
                              updatePoints({ ques_id: ele.qid, ans: text, points: ele.pts });
                            }} >Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                })
              }

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div> : <div className="overlay">
        <div className="overlay__inner">
          <div className="overlay__content"><span className="spinner"></span></div>
        </div>
      </div>}
    </>
  );
}
export default ArmyPoint;