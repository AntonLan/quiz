import {useState} from "react";
import {questions} from "../service/data";

export function useGame() {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [percent, setPercent] = useState(0)


    const handleClick = (index: any) => {
        let question = questions[step]
        let percentStep = Math.round((1 / questions.length) * 100)
        if (index === question.correctAnswer) {
            setCorrect( correct + 1)
        }
        setStep(step + 1)
        setPercent (percent + percentStep)
    }



    return { step, correct, percent, handleClick  }
}