import React from "react";
import "@fontsource/iosevka-curly";

const App: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Iosevka Curly",
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
          <h1>[Raf] Abdul Raafay Shahid</h1>
          <p>
            14 Carr Manor Walk | Leeds, LS17 5DN | +44 7802 805827 |
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
        <div style={{ width: "40%", paddingRight: "20px", fontSize: "14px" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>References</h2>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <b>Carl Robinson: Tech Lead</b>
                <br />
                +44 7946 211406
              </li>
              <li>
                <b>Niall Walsh: Senior Engineer</b>
                <br />
                +44 7756 511924
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Links</h2>
            <ul style={{ listStyleType: "none" }}>
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
            <h2 style={{ fontSize: "16px" }}>Languages</h2>
            <p>English, Chinese, Urdu</p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Passions</h2>
            <p>
              Cooking, Painting, Music, Movies, Photography, Muay Thai, Motor
              Mechanics, Media Preservation, Right to Repair
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Technologies</h2>
            <p>
              Typescript, NextJS, React, React Native, Java, C#, Python, Rust,
              C, SQL, AWS, Linux, Bash, Nix
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Education</h2>
            <p>
              <b>BEng Software Engineering</b>
              <br />
              Sheffield Hallam University
              <br />
              <b>2020 - 2025</b>
              <br /> <br />
            </p>
            <p>
              <b>A-Level: Computer Science, Maths, Economics</b>
              <br />
              Notre Dame Catholic Sixth Form College
              <br />
              <b>2018 - 2020</b>
              <br /> <br />
            </p>
            <p>
              <b>
                GCSE: Computer Science, IT, Maths, Physics, Geography, Spanish,
                Fine Art
              </b>
              <br />
              Allerton High School
              <br />
              <b>2013 - 2018</b>
              <br />
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div style={{ width: "60%", fontSize: "16px" }}>
          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>About</h2>
            <div style={{ fontSize: "14px" }}>
              I'm Raf, Currently in my personal time I'm studying Chinese, I
              have achieved HSK2 in just under 6 months and I'm hoping to take
              the HSK3 exam this year. I'm passionate about connecting with art
              and people through that art. I love to read and learn recipes and
              cooking techniques from narrative cookbooks I hope to write my own
              someday, away from the kitchen I like to explore music and movies
              and support my favourite artists and directors. When I'm away from
              home I'm often found practicing Muay Thai at my local gym
            </div>
          </section>
          <section style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px" }}>Work Experience</h2>
            <div style={{ fontSize: "14px" }}>
              <b>Software Engineer: RAM Tracking</b>
              <br />
              Worked on reaching feature parity between a legacy monolithic
              system and a new microservices system. Both of which process,
              interpret and store vehicle tracking unit messages and also
              provide a user interface for customers to view, track and manage
              their assets. I also wrote internal use parsing and encoding tools
              to aid development. Legacy system was written in Java, Javascript,
              MySQL, AWS. New services were written in Java, Groovy, Kotlin,
              database remained MySQL and AWS, web frontend was React, app was
              React Native. Responsible for development, testing, documenting,
              releases, demoing. I was also entrusted with architecting and
              implementing a new data model as we began to consume an old camera
              unit project into a new microservice
              <br /> <b>Feburary 2025 - Present</b>
              <br />
              <br />
              <b>Placement Software Engineer: Cognitran Limited</b>
              <br />
              Worked on two fullstack projects during the year, the first was a
              bespoke legacy system written in Java, Javascript, Java Server
              Pages, MySQL, Oracle DB. The second was a new NextJS project with
              a frontend and backend written in Typescript with a MySQL
              database. Responsible for development, testing, estimations,
              database migrations. I was also entrusted with releases and
              demoing to clients by the project manager
              <br /> <b>August 2023 - August 2024</b>
              <br />
              <br />
              <b>Pizza Chef: Ecco Pizzeria</b>
              <br />
              Worked in a fast paced environment as both back of house and front
              of house chef at my local restaurant, learnt how to manage stock
              and balance timing and work under pressure. Responsible for food
              preparation, furnace managing, stock taking and station cleaning
              <br /> <b>August 2022 - February 2023</b>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
