import React from "react";
import Cell from "../Cell/Cell";
import "./Grid.css";

export default function Grid({ cells, handleSetFocus }) {
  return (
    <div className="grid">
      {" "}
      <svg viewBox="0 0 150 150">
        <rect x={0} y={0} width={100} height={100} />
        {cells.map((cell) => {
          return (
            <Cell
              gridnum={cell.gridnum}
              letter={cell.letter}
              row={cell.row}
              column={cell.column}
              handleSetFocus={handleSetFocus}
            />
          );
        })}
      </svg>
    </div>
  );
}
