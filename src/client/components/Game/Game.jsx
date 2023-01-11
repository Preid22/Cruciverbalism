import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "../Grid/Grid";
import Authorbox from "../Authorbox/Authorbox";
import "./Game.css";
import Clues from "../Clues/Clues";

export default function Game() {
  const [board, setBoard] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [focusCell, setFocusCell] = useState({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const date = "1979-10-10";
    fetch(`/creategame?date=${date}`).then((data) => {
      if (data.status === 200) {
        data.json().then(({ data }) => {
          console.log(data);
          setBoard(data);
          setisLoading(false);
        });
      }
    });
  }, []);

  useEffect(() => {
    console.log(
      `The Cell in focus is now on row: ${focusCell.row} and column: ${focusCell.column}`
    );
  }, [focusCell]);

  const handleSetFocus = (row, column) => {
    const newFocus = {
      row,
      column,
    };
    setFocusCell(newFocus);
  };
  const handleClick = () => setClicked(!clicked);

  return (
    <div className="gamepage">
      <h2>The Fake New York Times Crossword</h2>
      {!isLoading && (
        <>
          <Authorbox
            author={board.author}
            editor={board.editor}
            publisher={board.publisher}
          />
          <div className="link">
            <Link to="../">Home</Link>
            <Link to="../config">Settings</Link>
          </div>
          <div
            className="game"
            onKeyDown={(event) => {
              console.log(event);
            }}
            role="button"
            tabIndex={0}
          >
            <div>
              <Grid
                cells={board.cells}
                handleSetFocus={handleSetFocus}
                handleClick={handleClick}
                clickStatus={clicked}
              />
            </div>
            <Clues direction="Across" clues={board.acrossCluesArr} />
            <Clues direction="Down" clues={board.downCluesArr} />
          </div>
        </>
      )}
    </div>
  );
}
