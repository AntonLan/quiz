import React from 'react';
import {useGame} from "../hooks/useGame";
import {questions} from "../service/data";
import Game from "../components/Game/Game";
import Result from "../components/Result/Result";

const Home = () => {
    const {step, correct, percent, handleClick} = useGame()

    return (
        <>
            {step !== questions.length ?
                <Game
                    question={questions[step]}
                    percent={percent}
                    handleClick={handleClick}
                />
                :
                <Result
                    correct={correct}
                />

            }
        </>
    );
};

export default Home;