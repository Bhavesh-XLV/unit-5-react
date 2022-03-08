import React, { useState } from "react";

export function GroceryInput({ onClick }) {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        placeholder="Add Grocery Item"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={() => onClick(title)}>Add</button>
    </div>
  );
}
