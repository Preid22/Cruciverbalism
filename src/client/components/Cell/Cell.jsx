import React from "react";

export default function Cell({
  focusCell,
  gridnums,
  letter,
  row,
  column,
  handleSetFocus,
  handleClick, //get rid of this
  clickStatus, //this too
}) {
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

  const focusFill = () => {
    if (letter === ".") {
      return "black";
    }
    if (row === focusCell.row && column === focusCell.column) {
      return "yellow";
    } else {
      return "white";
    }
  };

  // in return statement the <g> element is a container
  // used to group other SVG elements (<rect>,<text>x2)
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
        fill={focusFill()}
        stroke="black"
        strokeWidth={cellSize / 20}
      />
      <text
        x={x + cellPadding * 4 + 0.5}
        y={y + cellPadding * 4 + 0.5}
        textAnchor="start"
        dominantBaseline="hanging"
        style={{ fontSize: "13%", fill: "blue" }}
      >
        {gridnums[3]}
      </text>
      {showLetter && (
        <text
          x={x - cellHalf + 5}
          y={y - cellHalf + 6}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: "25%",
          }}
          fill="black"
        >
          {letter}
        </text>
      )}
    </g>
  );
}
