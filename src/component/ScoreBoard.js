import React from "react";

const ScoreBoard = (props) => {
  return (
    <div>
      <div className="alert alert-dark text-center" role="alert">
        Get points by clicking on an image but don't click on any one more than
        once!
      </div>
      <div className="d-flex justify-content-center my-4">
        <h4 className="mr-4"> Score: {props.score}</h4>
        <h4>High Score: {props.highScore}</h4>
      </div>
    </div>
  );
};

export default ScoreBoard;
