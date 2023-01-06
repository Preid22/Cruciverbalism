import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "../Grid/Grid";
import Authorbox from "../Authorbox/Authorbox";
import "./Game.css";

export default function Game() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const date = "1979-10-10";
    fetch(`/creategame?date=${date}`).then((data) => {
      if (data.status === 200) {
        data.json().then((data) => {
          setBoard(data);
          console.log(data.data.copyright);
        });
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log(board.data.author);
  // }, [board]); // Check out this dependency array, empty vs populated on re-render
  //Data change/re-render relationship
  //User input and interaction w state and state updates

  //if board is not empty ->
  // Hitting a wall here...my understanding is that the state variable is initialized as an empty object,
  // the useEffect data fetch does not show up until the next render (?), so trying to access that
  // data immediatly in the returned JSX comes back undefined. Using the short circuited
  // && conditional I think should allow access but it does not.
  return (
    <div className="gamepage">
      <h2>The Fake New York Times Crossword</h2>
      <div>
        {" "}
        {Object.keys(board).length > 0 && <Authorbox boardData={board} />}
      </div>
      <div className="link">
        test1
        <Link to="../">Home</Link>
        <Link to="../config">Settings</Link>
      </div>
      <div className="game">
        <div>
          <Grid />
        </div>
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
