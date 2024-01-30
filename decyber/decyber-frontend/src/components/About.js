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
          World war 3 is not just a war of nuclear weapons, it’s a cyber war as
          well. You are fighting for your nation team name. Help your soldiers
          win the war by neutralizing opposition communications and weapons by
          decrypting their passwords in the form of questions and getting your
          hold on them.
        </h5>
      </div>
      <br />
      <div className="container my-3">
        <h1 style={{ color: "cyan" }}>Game Flow</h1>
        <h5 style={{ color: "cyan" }}>
          1. Army related questions will only consist of simple puzzles.
        </h5>
        <h5 style={{ color: "cyan" }}>
          2.Capturing questions can range from deciphering, problem solving,
          decoding,riddles,puzzles,etc. The difficulty of the questions would be
          from easy to moderate.
        </h5>
        <h5 style={{ color: "cyan" }}>
          3. All the teams will be given access to all country related questions
          at the start of the event, so there won’t be any levels.
        </h5>
        <h5 style={{ color: "cyan" }}>
          4. The team with the most country points at the end of the event will
          be chosen as the winner.
        </h5>
      </div>
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
              <img className="profile_photo" src="../nikhil.jpg" alt="error" />
            </div>
            <div className="member_name">Nikhil Gupta</div>
            <div className="desc">
              Mathematics and Computing Branch, 3rd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="../keshav.jpg" alt="error" />
            </div>
            <div className="member_name">Keshav</div>
            <div className="desc">
              Mechanical Engineering Branch, 3rd Year
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
              <img className="profile_photo" src="../aman.jpg" alt="error" />
            </div>
            <div className="member_name">Aman Gupta</div>
            <div className="desc">
              Software Engineering Branch, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="../user.jpg" alt="error" />
            </div>
            <div className="member_name">Aditya Mishra</div>
            <div className="desc">
              Mathematics and Computing Branch, 2nd Year
            </div>{" "}
          </div>
        </div>
        <div className="container my-3">
          <h1 style={{ textAlign: "center", color: "cyan" }}>Content Team</h1>
        </div>
        <div className="subteam">
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="../user.jpg" alt="error" />
            </div>
            <div className="member_name">Nissan</div>
            <div className="desc">
              Mathematics and Computing Branch, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="../user.jpg" alt="error" />
            </div>
            <div className="member_name">Shivam</div>
            <div className="desc">
              Mathematics and Computing Branch, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="../user.jpg" alt="error" />
            </div>
            <div className="member_name">Sanyam</div>
            <div className="desc">
              Mathematics and Computing Branch, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="../kurush.jpg" alt="error" />
            </div>
            <div className="member_name">Kurush</div>
            <div className="desc">
              Electronics and Communication Engineering Branch, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="../vansh.jpg" alt="error" />
            </div>
            <div className="member_name">Vansh</div>
            <div className="desc">
              Electrical Engineering Branch, 2nd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img className="profile_photo" src="../prerna.jpg" alt="error" />
            </div>
            <div className="member_name">Prerna</div>
            <div className="desc">
              Computer Engineering Branch, 2nd Year
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
