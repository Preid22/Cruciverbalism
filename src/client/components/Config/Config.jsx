import React from "react";
import { Link } from "react-router-dom";
import "./Config.css";

export default function Config() {
  return (
    <div className="config">
      <div>
        <h1>Game Options</h1>
      </div>
      <div>
        <Link to={"../game"}>New Game</Link>
      </div>
    </div>
  );
}
