//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // First we need to set the variables that will be used across the app in both components
  const [awayScore, incrementAwayScore] = useState(0);
  const [homeScore, incrementHomeScore] = useState(0);

  const [quarter, changeQuarter] = useState(1);
  const [currentDown, setCurrentDown] = useState(1);
  const [posession, setPosession] = useState("home");
  const [ballOn, setBallOn] = useState(50);
  const [yardsTG, setYardsTG] = useState(10);
  // const [message, setMessage] = useState("Clock Running"); <-- I was going to set up FULLY automated scoreboard, but got tired..
  const [messageBG, setMessagBG] = useState("defaultBG");

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow
          currentDown={currentDown}
          yardsTG={yardsTG}
          posession={posession}
          ballOn={ballOn}
          quarter={quarter}
        />
      </section>

      {/* <section className="messages">
        <h3 className={messageBG}>{message}</h3>
      </section> */}

      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => incrementHomeScore(homeScore + 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={() => incrementHomeScore(homeScore + 1)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => incrementAwayScore(awayScore + 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => incrementAwayScore(awayScore + 1)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section>
      <section>
        <div className="buttons">
          <h3>Quarter:</h3>
          <button onClick={() => changeQuarter(1)}>1st</button>
          <button onClick={() => changeQuarter(2)}>2nd</button>
          <button onClick={() => changeQuarter(3)}>3rd</button>
          <button onClick={() => changeQuarter(4)}>4th</button>
        </div>
      </section>
    </div>
  );
}

export default App;
