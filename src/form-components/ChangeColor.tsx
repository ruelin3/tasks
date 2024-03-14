import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("");

    function handleColorChange(color: string) {
        setSelectedColor(selectedColor === color ? "" : color); // Toggle between color value and empty string
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                <Form.Label>Select Color:</Form.Label>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    {colors.map((color, index) => (
                        <Form.Check
                            key={index}
                            type="radio"
                            label={color.name}
                            checked={selectedColor === color.value}
                            onChange={() => handleColorChange(color.value)}
                            style={{
                                backgroundColor: color.value,
                                marginRight: "10px"
                            }}
                        />
                    ))}
                </div>
            </Form.Group>
            <div>
                You have chosen: {selectedColor ? "on" : "off"}
                <span
                    style={{
                        backgroundColor: selectedColor,
                        padding: "4px",
                        borderRadius: "4px"
                    }}
                >
                    <span data-testid="colored-box" style={{ color: "black" }}>
                        {selectedColor ? "on" : "off"}
                    </span>
                </span>
            </div>
        </div>
    );
}

const colors = [
    { name: "Red", value: "#FF0000" },
    { name: "Green", value: "#00FF00" },
    { name: "Blue", value: "#0000FF" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Purple", value: "#800080" },
    { name: "Cyan", value: "#00FFFF" },
    { name: "Orange", value: "#FFA500" },
    { name: "Pink", value: "#FFC0CB" }
];
