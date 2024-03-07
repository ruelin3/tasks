import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays = [
        { name: "New Year", emoji: "🎉", order: 1 },
        { name: "Valentine's Day", emoji: "❤️", order: 2 },
        { name: "Easter", emoji: " 🐰", order: 3 },
        { name: "Halloween", emoji: "🎃", order: 4 },
        { name: "Christmas", emoji: "🎄", order: 5 }
    ];

    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);

    // Function to advance to the next holiday alphabetically
    const advanceByAlphabet = () => {
        setCurrentHolidayIndex((currentHolidayIndex + 1) % holidays.length);
    };

    // Function to advance to the next holiday in the year
    const advanceByYear = () => {
        setCurrentHolidayIndex((currentHolidayIndex + 1) % holidays.length);
    };

    return (
        <div>
            <p>Holiday: {holidays[currentHolidayIndex].emoji}</p>
            <button onClick={advanceByAlphabet}>Advance by Alphabet</button>
            <button onClick={advanceByYear}>Advance by Year</button>
        </div>
    );
}
