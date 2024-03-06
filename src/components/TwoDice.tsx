import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(3);
    const [rightDie, setRightDie] = useState<number>(6);

    const rollLeftDie = () => {
        const newValue = d6();
        setLeftDie(newValue);
    };

    const rollRightDie = () => {
        const newValue = d6();
        setRightDie(newValue);
    };

    const checkWinLose = () => {
        if (leftDie === rightDie) {
            return "Win";
        } else if (leftDie === 1 && rightDie === 1) {
            return "Lose";
        }
        return null;
    };

    return (
        <div>
            <div>
                Left Die: <span data-testid="left-die">{leftDie}</span>
            </div>
            <button onClick={rollLeftDie}>Roll Left</button>
            <div>
                Right Die: <span data-testid="right-die">{rightDie}</span>
            </div>
            <button onClick={rollRightDie}>Roll Right</button>
            {checkWinLose()}
        </div>
    );
}
