import React from "react";

export default function Cell({
  gridnum,
  letter,
  row,
  column,
  handleSetFocus,
  handleClick,
  clickStatus,
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
        onClick={handleClick}
        x={x + cellPadding}
        y={y + cellPadding}
        width={cellInner}
        height={cellInner}
        fill={clickStatus ? "blue" : fill()}
        stroke={clickStatus ? "black" : "green"}
        strokeWidth={cellSize / 20}
      />
      <text
        x={x + cellPadding * 4 + 0.5}
        y={y + cellPadding * 4 + 0.5}
        textAnchor="start"
        dominantBaseline="hanging"
        style={{ fontSize: "13%", fill: "blue" }}
      ></text>
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
