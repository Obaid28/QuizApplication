import React from "react";
import TotalCorrect from "./totalcorrect";
import TotalIncorrect from "./totalincorrect";

function ScoreArea(props) {
  return (
    <div className="scoreWrapper">
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </div>
  );
}

export default ScoreArea;
