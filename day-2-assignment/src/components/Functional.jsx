import React from "react";

export default function Functional(props) {
  return (
    <>
      <h1>{props.header}</h1>
      <ul>
        {props.list.map(({ listType, listItem }) => (
          <li type={listType}>{listItem}</li>
        ))}
      </ul>
    </>
  );
}
