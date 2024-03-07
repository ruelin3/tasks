import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState(false);

    const startQuiz = () => {
        setQuizInProgress(true);
        setAttempts(attempts - 1);
    };
    const stopQuiz = () => {
        setQuizInProgress(false);
    };
    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <p>Attempts: {attempts}</p>
            <p>Quiz in progress: {quizInProgress ? "Yes" : "No"}</p>
            <button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </button>
            <button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </button>
            <button onClick={mulligan} disabled={quizInProgress}>
                Mulligan
            </button>
        </div>
    );
}
