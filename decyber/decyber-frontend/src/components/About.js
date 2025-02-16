import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <div className="container my-3">
        <h1 style={{ textAlign: "center", margin: "1rem 0", color: "#e0b31d" }}>
          DeCyber
        </h1>
      </div>
      <div className="container my-3">
        <h1 style={{ color: "#e0b31d" }}>Description</h1>
        <h5 style={{ color: "#e0b31d" }}>
        Welcome to DeCyber, an intellectually stimulating and multimedia-rich competition designed
        to challenge and showcase the diverse talents of competing teams. This three-round event
        promises an exhilarating journey through trivia, multimedia puzzles, and strategic flag
        capturing.
        </h5>
      </div>
      <br />
      {/* <div className="container my-3">
        <h1 style={{ color: "#e0b31d" }}>Game Flow</h1>
        <h5 style={{ color: "#e0b31d" }}>
          1.Capturing questions can range from deciphering, problem solving,
          decoding,riddles,puzzles,etc. The difficulty of the questions would be
          from easy to moderate.
        </h5>
        <h5 style={{ color: "#e0b31d" }}>
          2. All the teams will be given access to all country related questions
          at the start of the event, so there won’t be any levels.
        </h5>
        <h5 style={{ color: "#e0b31d" }}>
          3. The team with the most country points at the end of the event will
          be chosen as the winner.
        </h5>
      </div> */}
      {/* Team Details and End Credits */}
      <div className="team">
        <br />
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "#e0b31d" }}>Our Team</h1>
        </div>
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "#e0b31d" }}>Our Mentors</h1>
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
              Vice President, Computer Science, 3rd Year
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
              Chief Coordinator, Computer Science, 3rd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/ADIT.jpg" alt="error" />
            </div>
            <div className="member_name">Adit Gupta</div>
            <div className="desc">
              Director, Computer Science, 3rd Year
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
          <h1 style={{ textAlign: "center", color: "#e0b31d" }}>
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
              General Coordinator, Computer Science, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/arjit.jpg" alt="error" />
            </div>
            <div className="member_name">Arjit Saxena</div>
            <div className="desc">
              Technical Head, Computer Science, 2nd Year
            </div>{" "}
          </div>
        </div>
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "#e0b31d" }}>Content Team</h1>
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
              <img className="profile_photo" src="/ibrahim.jpg" alt="error" />
            </div>
            <div className="member_name">Ibrahim Haneef</div>
            <div className="desc">
              Technical Head, Information Technology, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/aggarwal.jpg" alt="error" />
            </div>
            <div className="member_name">Harshit Aggarwal</div>
            <div className="desc">
              Corporate Head, Computer Science, 2nd Year
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
              Technical Head, Computer Science, 2nd Year
            </div>{" "}
          </div>
          
        </div>
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "#e0b31d" }}>
            Our Special Pookies 🎀
          </h1>
        </div>
          
        <div className="subteam">
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/hussain.png" alt="error" />
            </div>
            <div className="member_name">Hussain</div>
            <div className="desc">
              1st Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/daksh.jpg" alt="error" />
            </div>
            <div className="member_name">Daksh Gangwar</div>
            <div className="desc">
              1st Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/anumaanwhig.jpg" alt="error" />
            </div>
            <div className="member_name">Anumaan Whig</div>
            <div className="desc">
              1st Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="/aryangoel.jpg" alt="error" />
            </div>
            <div className="member_name">Aryan Goel</div>
            <div className="desc">
              1st Year
            </div>{" "}
          </div>
        </div>
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "#e0b31d" }}>End Credits</h1>
          <h5 style={{ textAlign: "center", color: "#e0b31d" }}>
            We thank every person that came forward to do PR for this event.🙏
          </h5>
          <h5 style={{ textAlign: "center", color: "#e0b31d" }}>
            We thank every contestant that came to play this game, this event
            couldn't be possible without you guys.😉
          </h5>
          <h5 style={{ textAlign: "center", color: "#e0b31d" }}>
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
