import React from "react";

const EndGame = (props) => {
  const textColor =
    props.score > props.highScore ? "text-success" : "text-danger";

  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className={textColor}>Game Over!</h1>
        <p className="lead">Your Score is {props.score}</p>
        <button className="btn btn-info" onClick={props.gameRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default EndGame;
