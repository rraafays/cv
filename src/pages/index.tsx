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
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>
          <img
            src="img.jpg"
            alt="Circular Image"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 25,
            }}
          />
        </div>
        <div>
          <h1>Abdul Raafay Shahid</h1>
          <p>
            14 Carr Manor Walk | Leeds, LS17 5DN | (+44) 07802805827 |
            rraf@tuta.io
          </p>
        </div>
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

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Languages</h2>
            <ul style={{ listStyleType: "none" }}>
              <li>English</li>
              <li>Spanish</li>
              <li>Punjabi</li>
              <li>Urdu</li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div style={{ width: "65%", fontSize: "16px" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>About</h2>
            <p style={{ fontSize: "14px" }}>
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
            <ul style={{ listStyleType: "none", fontSize: "14px" }}>
              <b>SHU Software Architecture {"&"} Design</b>
              <br /> Learnt how to architect software systems, created a grand
              design document as well as various artifacts to document the new
              system
              <br /> <b>November 2024</b>
              <br />
              <br />
              <b>FRMWRK</b>
              <br /> Ongoing system configuration for my immutable and
              reproducible laptop work and entertainment system which takes a
              modular approach leveraging gitsubmodules allowing shared modules
              across an array of systems
              <br />
              <b>September 2024</b>
              <br />
              <br />
              <b>Barish</b>
              <br /> BBC weather scraper which allows the user to provide a
              location as an argument and then pulls the correct weather
              information using a table of arbitrary location codes used by BBC
              weather's official rss feed
              <br /> <b>Agusut 2023</b>
              <br />
              <br />
              <b>Socks</b>
              <br /> multi-threaded client-server socket based chat application
              with channels which stores chats as json objects allowing a dead
              server to deserialise and restore itself upon start using a log
              file
              <br /> <b>january 2023</b>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "16px" }}>Work Experience</h2>
            <div style={{ fontSize: "14px" }}>
              <b>Placement Software Engineer: Cognitran Limited</b>
              <br /> Worked on full stack software systems for Jaguar Land Rover
              as well as internal software solutions provided by Cognitran for
              companies such as JCB {"&"} Harley Davidson
              <br /> <b>August 2023 - August 2024</b>
              <br />
              <br />
              <b>Pizza Chef: Ecco Pizzeria</b>
              <br /> Worked in a fast paced environment as both back of house
              {" &"} front of house chef at my local restaurant, learnt how to
              manage stock and balance timing and work under pressure
              <br /> <b>August 2022 - February 2023</b>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
