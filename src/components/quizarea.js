import React from "react";
import Question from "./question";
import AnswerList from "./answerlist";
import PassMessage from "./pass";
import FailMessage from "./fail";

function Quizarea(props) {
  if (props.isFinished & props.correct >= 2) {
    return<PassMessage />;
  } else if (props.isFinished & props.incorrect <= 2) {
    return<FailMessage />
  }
  
    return (
      <div>
        <Question dataSet={props.dataSet} />
        <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
      </div>
    );
  
}

export default Quizarea;
