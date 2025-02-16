import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <div className="container my-3">
        <h1 style={{ textAlign: "center", margin: "1rem 0", color: "cyan" }}>
          DeCyber
        </h1>
      </div>
      <div className="container my-3">
        <h1 style={{ color: "cyan" }}>Description</h1>
        <h5 style={{ color: "cyan" }}>
        Welcome to DeCyber, an intellectually stimulating and multimedia-rich competition designed
        to challenge and showcase the diverse talents of competing teams. This three-round event
        promises an exhilarating journey through trivia, multimedia puzzles, and strategic flag
        capturing.
        </h5>
      </div>
      <br />
      {/* <div className="container my-3">
        <h1 style={{ color: "cyan" }}>Game Flow</h1>
        <h5 style={{ color: "cyan" }}>
          1.Capturing questions can range from deciphering, problem solving,
          decoding,riddles,puzzles,etc. The difficulty of the questions would be
          from easy to moderate.
        </h5>
        <h5 style={{ color: "cyan" }}>
          2. All the teams will be given access to all country related questions
          at the start of the event, so there won’t be any levels.
        </h5>
        <h5 style={{ color: "cyan" }}>
          3. The team with the most country points at the end of the event will
          be chosen as the winner.
        </h5>
      </div> */}
      {/* Team Details and End Credits */}
      <div className="team">
        <br />
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "cyan" }}>Our Team</h1>
        </div>
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "cyan" }}>Our Mentors</h1>
        </div>
        <div className="subteam">
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/AYAN.jpg" alt="error" />
            </div>
            <div className="member_name">Ayan Mahajan</div>
            <div className="desc">
              President, Mathematics and Computing Branch, 3rd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/ADITYA.jpg" alt="error" />
            </div>
            <div className="member_name">Aditya Pratap Singh</div>
            <div className="desc">
              Vice President, Computer Science 3rd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/prashant.png" alt="error" />
            </div>
            <div className="member_name">Prashant Kaushik</div>
            <div className="desc">
              Vice President, Information Technology, 3rd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/titiksha.jpg" alt="error" />
            </div>
            <div className="member_name">Titiksha Sharma</div>
            <div className="desc">
              Chief Coordinator, Computer Science 3rd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/ADIT.jpg" alt="error" />
            </div>
            <div className="member_name">Adit Gupta</div>
            <div className="desc">
              Director, Computer Science 3rd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/DIVYANSHU.jpg" alt="error" />
            </div>
            <div className="member_name">Divyanshu Bansal</div>
            <div className="desc">
              Strategic Director , Mathematics and Computing Branch, 3rd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/aryan.jpg" alt="error" />
            </div>
            <div className="member_name">Aryan Goel</div>
            <div className="desc">
              Treasurer, Mathematics and Computing Branch, 3rd Year
            </div>{" "}
          </div>
          
        </div>
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "cyan" }}>
            Development Team
          </h1>
        </div>
          
        <div className="subteam">
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/hitesh.jpg" alt="error" />
            </div>
            <div className="member_name">Hitesh Mehta</div>
            <div className="desc">
              General Coordinator, Computer Science 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/arjit.jpg" alt="error" />
            </div>
            <div className="member_name">Arjit Saxena</div>
            <div className="desc">
              Technical Head, Computer Science 2nd Year
            </div>{" "}
          </div>
        </div>
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "cyan" }}>Content Team</h1>
        </div>
        <div className="subteam">
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/sarannye.jpg" alt="error" />
            </div>
            <div className="member_name">Sarannye Rathi</div>
            <div className="desc">
              Joint Coordinator, Mechanical Engineering, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/nancy.jpg" alt="error" />
            </div>
            <div className="member_name">Nancy Singh</div>
            <div className="desc">
              Joint Coordinator, Information Technology, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/aggarwal.jpg" alt="error" />
            </div>
            <div className="member_name">Harshit Aggarwal</div>
            <div className="desc">
              Corporate Head, Computer Science 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/jayasri.jpg" alt="error" />
            </div>
            <div className="member_name">Jayasri</div>
            <div className="desc">
              PR Head, BioTechnology, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/dhruv.jpg" alt="error" />
            </div>
            <div className="member_name">Dhruv Dawar</div>
            <div className="desc">
              Technical Head, Computer Science 2nd Year
            </div>{" "}
          </div>
          
        </div>
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "cyan" }}>End Credits</h1>
          <h5 style={{ textAlign: "center", color: "cyan" }}>
            We thank every person that came forward to do PR for this event.🙏
          </h5>
          <h5 style={{ textAlign: "center", color: "cyan" }}>
            We thank every contestant that came to play this game, this event
            couldn't be possible without you guys.😉
          </h5>
          <h5 style={{ textAlign: "center", color: "cyan" }}>
            For any feedback, mail us at :{" "}
            <a href="mailto:decyber.feedback@gmail.com" target={"_blank"}>
              decyber.feedback@gmail.com 📨
            </a>
          </h5>
        </div>
      </div>
    </>
  );
}
