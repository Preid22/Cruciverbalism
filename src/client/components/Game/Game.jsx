import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "../Grid/Grid";
import "./Game.css";

export default function Game() {
    const [board, setBoard] = useState({});
    useState(() => {                                         //should this be setBoard() instead of useState()?
        const date = "1979-10-10";                           // Let user input/choose date
        fetch(`/creategame?date=${date}`).then((data) => {
            if (data.status === 200) {
                data.json().then((data) => {
                    console.log(data);
                    setBoard(data);
                });
            }
        });
    }, []);

    return (
        <div className="gamepage">
            <h2>The Fake New York Times Crossword</h2>
            <div className="link">
                <Link to="../">Home</Link>
                <Link to="../config">Settings</Link>
            </div>
            <div className="game">
                <Grid />
                <ol className="clues">
                    <li>Clue</li>
                    <li>Clue</li>
                    <li>Clue</li>
                    <li>Clue</li>
                    <li>Clue</li>
                </ol>
                <ol className="clues">
                    <li>Clue</li>
                    <li>Clue</li>
                    <li>Clue</li>
                    <li>Clue</li>
                    <li>Clue</li>
                </ol>
            </div>
        </div>
    );
}
