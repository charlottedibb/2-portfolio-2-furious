import React from "react";
import "../styles/More.css";

export default function More() {
  return (
    <div className="more">
      <h3>Other stuff I've been up to</h3>
      <div className="more-group">
        <p>I cross stitched a QR code that leads you to this very site.</p>
        <img
          src={require("../media/smallQR.png")}
          alt="cross stitched QR code"
          className="xstitch"
        />
      </div>
      <div className="more-group">
        <img
          src={require("../media/pointing.png")}
          id="pointing"
          alt="cartoon person pointing"
        />
        <p>
          Check out{" "}
          <a href="https://medium.com/@charlotte.dibb/create-a-mini-pixel-art-app-with-react-fc8c706d8192">
            this tutorial
          </a>{" "}
          I wrote on creating a mini pixel art application with React.
        </p>
      </div>
    </div>
  );
}
