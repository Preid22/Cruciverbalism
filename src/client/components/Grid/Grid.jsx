import React from "react";
import Cell from "../Cell/Cell";
import "./Grid.css";

export default function Grid({
  cells, //{letter:'', row:0, column:0}
  gridnums,
  handleSetFocus,
  handleClick,
  clickStatus,
  focusCell
}) {
  return (
    <div className="grid">
      {" "}
      <svg viewBox="0 0 150 150">
        <rect x={0} y={0} width={100} height={100} />
        {cells.map((cell) => {
          return ( // mapping over cells, return a cell
                   // component for each w props from cells data
            <Cell
             focusCell={focusCell}
              gridnums={gridnums}//does nothing, no access??
              letter={cell.letter}
              row={cell.row}
              column={cell.column}
              handleSetFocus={handleSetFocus}
              handleClick={handleClick}
              clickStatus={clickStatus}
            />
          );
        })}
      </svg>
    </div>
  );
}
