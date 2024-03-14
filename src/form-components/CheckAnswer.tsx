import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
        setIsCorrect(event.target.value === expectedAnswer);
    };

    const getStatus = () => {
        if (userAnswer === "") {
            return "❌";
        } else {
            return isCorrect ? "✔️" : "❌";
        }
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
            />
            <span>{getStatus()}</span>
        </div>
    );
}
