import React from "react";
import "@fontsource/iosevka-curly";

const App: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Iosevka Term Curly",
        margin: "40px",
      }}
    >
      <div>
        <h1>Abdul Raafay Shahid</h1>
        <p>
          14 Carr Manor Walk | Leeds, LS17 5DN | (+44) 07802805827 |
          rraf@tuta.io
        </p>
      </div>
      <div
        style={{
          margin: "20px",
          display: "flex",
        }}
      >
        {/* Left Column */}
        <div style={{ width: "35%", paddingRight: "20px", fontSize: "14px" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Links</h2>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="https://raafay.world/projects">
                  raafay.world/projects
                </a>
              </li>
              <li>
                <a href="https://github.com/rraafays">github.com/rraafays</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/rraafay">
                  linkedin.com/in/rraafay
                </a>
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Technologies</h2>
            <ul style={{ listStyleType: "none" }}>
              <li>Rust</li>
              <li>Java</li>
              <li>C#</li>
              <li>Typescript</li>
              <li>Javasript</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Languages</h2>
            <ul style={{ listStyleType: "none" }}>
              <li>English</li>
              <li>Spanish</li>
              <li>Punjabi</li>
              <li>Urdu</li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Education</h2>
            <p>
              BEng Software Engineering
              <br />
              <b>Sheffield Hallam University</b>
              <br />
              2020 - present
              <br /> <br />
            </p>
            <p>
              A-Level Computer Science (C), Maths (C), Economics (D)
              <br />
              <b>Notre Dame Catholic Sixth Form College</b>
              <br />
              2018 - 2020
              <br /> <br />
            </p>
            <p>
              GCSE Computer Science (A*), Maths (7), English (6 5), Combined
              Science (6 5), Geography (6), Spanish (5), IT (B)
              <br />
              <b>Allerton High School</b>
              <br />
              2013 - 2018
              <br />
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Passions</h2>
            <p>
              Martial Arts, Muay Thai, Cooking, Painting, Electronics, Motor
              Mechnanics, Digital Minimalism, Music, Movies, Photography
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div style={{ width: "65%", fontSize: "16px" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>About</h2>
            <p>
              "Raf" Shahid is a versatile software engineer with a strong
              technical foundation and hands-on experience in languages like
              Rust, Java, and Python. Currently pursuing a BEng in Software
              Engineering, he has delivered impactful projects and gained
              diverse work experience, blending technical expertise with a
              passion for innovation and growth.
              <br />
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Notable Projects</h2>
            <ul style={{ listStyleType: "none" }}>
              <b>SHU Library: software architecture & design project</b>
              <br /> November 2024 <br />
              <b>FRMWRK: reproducible laptop system</b>
              <br /> September 2024 <br />
              <b>Barish: BBC weather scraper written in rust</b>
              <br /> August 2023 <br />
              <b>Doro: pomodoro timer written in rust</b>
              <br /> July 2023 <br />
              <b>Socks: multi-threaded socket based chat</b>
              <br /> January 2023 <br />
              <b>Personal Website: projects & passions showcase</b>
              <br /> July 2022 <br />
              <b>SHUber: Uber-inspired taxi application</b>
              <br /> February 2020
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "16px" }}>Work Experience</h2>
            <b>Placement Software Engineer: Cognitran Limited</b>
            <br />
            August 2023 - August 2024
            <br />
            <b>Pizza Chef: Ecco Pizzeria</b>
            <br />
            August 2022 - February 2023
            <br />
            <b>Voluntary Technician: AALFY</b>
            <br />
            August 2021 - December 2022
            <br />
            <b>Front of House: Friesday</b>
            <br />
            August 2021 - July 2022
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
