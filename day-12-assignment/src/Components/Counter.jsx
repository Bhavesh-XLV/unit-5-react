import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, decCount } from "../Redux/Counter/action";

const Counter = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
        style={{ marginRight: "50px" }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(decCount(1));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
