import React from 'react'
import "../styles/about.css"

export default function Memories() {
    return (
        <>
            <div className='container my-3'>
                <h1 style={{ textAlign: "center", margin: "1rem 0", color: "cyan" }}>OUR TEAM</h1>
            </div>
            <div className="container my-3">
                <h5 style={{ color: "cyan" }}>
                    DeCyber, a multiplayer game developed for a tech fest, requires players to decrypt country-specific codes to capture countries, following the hypothetical scenario of a cyber-war in World War III.
                    The website has already attracted 150+ visitors and counting, featuring a responsive design, a secure and robust backend, and fast loading times. Overall, the website’s attractive and clean appearance makes it an appealing experience for visitors.
                </h5>
            </div>
            <br />
            {/* Team Details and End Credits */}
            <div className="team">
                <br />
                <div className="subteam">
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="../Promo1.png" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="../Promo2.png" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="../Promo3.png" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/NISSAN.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/aman.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/CHARVI.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/HARSHIT.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/SHIVAM.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/ADIT.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/AYUSH.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/ABHIMANYU.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/ADITYA.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/HARDIK.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/DIVYANSHU.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/AKSHAT_JINDAL.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/AYAN.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image_container">
                            <img className="profile_photo" src="/ANSHUMAAN.jpg" alt="error" />
                        </div>
                    </div>
                </div>
                <div className="container my-3">
                    <h1 style={{ textAlign: "center", color: "cyan" }}>End Credits</h1>
                    <h5 style={{ textAlign: "center", color: "cyan" }}>
                        We thank every person that came forward to do PR for this event.🙏
                    </h5>
                    <h5 style={{ textAlign: "center", color: "cyan" }}>
                        We thank every contestant that came to play this game, this event couldn't be possible without you guys.😉
                    </h5>
                </div>
            </div>
        </>

    )
}