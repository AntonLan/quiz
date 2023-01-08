import React from "react";
import Congrats from "../../assets/congrats.png"
import {questions} from "../../service/data";


interface ResultProps {
    correct: number
}

const Result = ({correct}: ResultProps) => {

    return (
        <div className="card card-game position-absolute top-50 start-50 translate-middle padding-result">
            <div className="text-center">
                <img
                    className="img-size"
                    src={Congrats}
                    alt="logo"/>
            </div>
            <h3 className="card-title text-center padding-result">
                Поздравляем
            </h3>
            <h6 className="card-title text-center padding-result">
                Вы угадали {correct} вопроса из {questions.length}
            </h6>
            <a
                href="/"
                className="text-center">
                <button type="button" className="btn btn-primary btn-color">
                    Попробовать снова
                </button>
            </a>
        </div>
    )
}

export default Result