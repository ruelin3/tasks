import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    const changeType = () => {
        setQuestionType(
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>

            {questionType === "multiple_choice_question" && (
                <p>Multiple Choice</p>
            )}
            {questionType === "short_answer_question" && <p>Short Answer</p>}
        </div>
    );
}
