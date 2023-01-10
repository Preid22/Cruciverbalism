import React from "react";
import "./Clues.css";

export default function Clues({ direction, clues }) {
  return (
    <ol className="clues">
      <li>{direction}</li>
      {clues.map((clue) => {
        return (
          <div className="clue">
            <div className="clue-num">{clue.num} -</div>
            <div className="clue-string">{clue.clueString}</div>
          </div>
        );
      })}
    </ol>
  );
}
