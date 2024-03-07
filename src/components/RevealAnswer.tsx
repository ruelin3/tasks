import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    function flipVisibility(): void {
        setIsVisible(!isVisible);
    }
    return (
        <div>
            <button onClick={flipVisibility}>Reveal Answer</button>

            {/* Render the answer (42) if isVisible is true */}
            {isVisible && <p>The answer is: 42</p>}
        </div>
    );
}
