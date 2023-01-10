import React from "react";

export default function Authorbox({ author, editor, publisher }) {
  return (
    <div>
      <span>{author}</span>
      <span>{editor}</span>
      <span>{publisher}</span>
    </div>
  );
}
