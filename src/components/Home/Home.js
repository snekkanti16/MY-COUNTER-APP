import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [timer, setTimer] = useState(0);

  const startButtonHandler = () => {
    setTimer(10);
  };

  const resetButtonHandler = () => {
    setTimer(0);
  };

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="home-container">
      <div className="home-timer">timer:{timer}</div>
      <div className="button-container">
        <button
          className="home-button-start btn"
          onClick={startButtonHandler}
          disabled={timer !== 0}
        >
          start
        </button>
        <button className="home-button-reset btn" onClick={resetButtonHandler}>
          reset
        </button>
      </div>
    </div>
  );
}

export default Home;
