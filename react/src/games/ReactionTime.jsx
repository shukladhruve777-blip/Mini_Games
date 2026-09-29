import { useState } from "react";
import { pickRandomDelay } from "../utils/gameData";

function ReactionTime({ onBack }) {
  // which part of the game we're on:
  // "start", "waiting" (red), "go" (green), "tooEarly", or "result"
  const [phase, setPhase] = useState("start");

  // how long the last click took, in milliseconds
  const [reactionTime, setReactionTime] = useState(null);

  // the fastest time so far (null until the first good click)
  const [bestTime, setBestTime] = useState(null);

  // the timer that will turn the box green
  const [timerId, setTimerId] = useState(null);

  // the moment the box turned green
  const [startTime, setStartTime] = useState(null);

  // runs when the wait is over: the box turns green
  function turnGreen() {
    setStartTime(Date.now());
    setPhase("go");
  }

  // runs when the player presses "Start Game" or "Try Again"
  function startRound() {
    setPhase("waiting");
    const delay = pickRandomDelay(2000, 5000);
    const id = setTimeout(turnGreen, delay);
    setTimerId(id);
  }

  // runs when the player clicks the big box
  function handleBoxClick() {
    if (phase === "waiting") {
      // clicked too soon, so stop the timer
      clearTimeout(timerId);
      setPhase("tooEarly");
    }

    if (phase === "go") {
      const time = Date.now() - startTime;
      setReactionTime(time);
      setPhase("result");

      if (bestTime === null || time < bestTime) {
        setBestTime(time);
      }
    }
  }

  if (phase === "start") {
    return (
      <div className="start-screen">
        <h1 className="game-title">Reaction Time</h1>
        <hr />
        <div className="start-options">
          <p>
            Click Start. When the box turns green, click it as fast as you can.
            Don't click while it's red!
          </p>
          <button className="btn-primary" onClick={startRound}>
            Start Game
          </button>
          <button className="btn-secondary" onClick={onBack}>
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  // the text and color for the box in each phase
  let boxText = "";
  let boxClass = "";

  if (phase === "waiting") {
    boxText = "Wait for green...";
    boxClass = "reaction-waiting";
  }
  if (phase === "go") {
    boxText = "Click now!";
    boxClass = "reaction-go";
  }
  if (phase === "tooEarly") {
    boxText = "Too early!";
    boxClass = "reaction-early";
  }
  if (phase === "result") {
    boxText = reactionTime + " ms";
    boxClass = "reaction-result";
  }

  // true when the round has finished
  const roundIsOver = phase === "tooEarly" || phase === "result";

  return (
    <div className="game-container">
      <div className="game-bar">
        <div className={"reaction-box " + boxClass} onPointerDown={handleBoxClick}>
          {boxText}
        </div>

        <div className="button-row">
          {roundIsOver && (
            <button className="btn-primary" onClick={startRound}>
              Try Again
            </button>
          )}
          <button className="btn-secondary" onClick={onBack}>
            Menu
          </button>
        </div>

        {bestTime !== null && <p className="result">Best: {bestTime} ms</p>}
      </div>
    </div>
  );
}

export default ReactionTime;
