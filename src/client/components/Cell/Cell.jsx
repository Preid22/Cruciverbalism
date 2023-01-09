import React from "react";

export default function Cell({ gridnum, letter, row, column, handleSetFocus }) {
  const cellPadding = 0;
  const cellInner = 10;
  const cellSize = 10;
  const cellHalf = 0;
  const x = column * cellSize;
  const y = row * cellSize;
  const showLetter = letter !== ".";

  const fill = () => {
    if (letter === ".") {
      return "black";
    } else {
      return "white";
    }
  };

  return (
    <g
      onClick={() => {
        handleSetFocus(row, column);
      }}
      style={{ cursor: "pointer" }}
      className="clue-cell"
    >
      <rect
        x={x + cellPadding}
        y={y + cellPadding}
        width={cellInner}
        height={cellInner}
        fill={fill()}
        stroke="black"
        strokeWidth={cellSize / 50}
      />
      {gridnum && (
        <text
          x={x + cellPadding * 4 + 0.5}
          y={y + cellPadding * 4 + 0.5}
          textAnchor="start"
          dominantBaseline="hanging"
          style={{ fontSize: "13%", fill: "blue" }}
        >
          {gridnum}
        </text>
      )}
      {showLetter && (
        <text
          x={x - cellHalf + 5}
          y={y - cellHalf + 6}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: "25%",
          }}
          fill="red"
        >
          {letter}
        </text>
      )}
    </g>
  );
}
