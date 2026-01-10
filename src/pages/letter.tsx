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
      <div>
      </div>
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
      </div>
    </div>
  );
};

export default App;
