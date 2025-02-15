import React, { useState, useEffect } from "react";
import "./App.css";

import GenericShape from "./GenericShape.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="shape-container">
          <GenericShape shapeType={"plane"} />
          <GenericShape shapeType={"box"} />
        </div>
        <div className="shape-container">
          <GenericShape shapeType={"cylinder"} />
          <div className="text-container">
            <p className="text">Hi, I'm Chris.</p>
            <div className="video-responsive">
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/qGRQFSKhwzI?si=ylOzRVrFXGpBDkHC"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <GenericShape shapeType={"ellipsoid"} />
        </div>
        <div className="shape-container">
          <GenericShape shapeType={"cone"} />
          <GenericShape shapeType={"torus"} />
        </div>
      </header>
    </div>
  );
}

export default App;
