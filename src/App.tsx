import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import picture from "../src/pika.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD CISC275</header>
            <h1>Hello!</h1>
            <img src={picture} alt="pika" width="300" />

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World{" "}
            </Button>
            <div>
                Shing Rue Lin Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </div>

            <Container>
                <Row>
                    <Col>
                        <div className="App-red-rectangle">First column.</div>
                    </Col>
                    <Col>
                        <div className="App-red-rectangle">
                            Second column
                            <div>
                                <ul>
                                    <li> Cat </li>
                                    <li> Dog </li>
                                    <li> Cow</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
