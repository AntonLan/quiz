import React from "react";
import { QuestionType } from "../../service/model/QuestionType";

interface GameProps {
    handleClick: (index: any) => void
    question: QuestionType
    percent: number
}


const Game = ({handleClick, question, percent}: GameProps) => {

        return (
            <div className="card card-game position-absolute top-50 start-50 translate-middle padding-result">
                <div className="progress padding-progress">
                    <div className="progress-bar" role="progressbar" style={{width: `${percent}%`}}
                         aria-valuemin={0} aria-valuemax={100}>
                    </div>
                </div>
                <h5 className="card-title text-center padding-game">{question.title}</h5>
                    {question.answers.map((answer, index: number) => {
                        return (
                        <button className="btn btn-primary btn-color text-center"
                                key={index}
                                onClick={() => handleClick(index)}>
                            {answer}
                        </button>
                        )
                    })}
            </div>
        );

}

export default Game