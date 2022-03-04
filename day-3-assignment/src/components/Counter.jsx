// export function Counter(props) {
//   console.log(props);
//   return <div>Counter : {props.value ? "true" : "false"}</div>;
// }

import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const HandleChange = (value) => {
    setCounter(counter + value);
  };
  const HandleMul = () => {
    setCounter(counter * 2);
  };
  return (
    <>
      <h3>Counter : {counter}</h3>
      <button onClick={() => HandleChange(1)}>ADD 1</button>
      <button
        onClick={() => {
          if (counter >= 1) {
            HandleChange(-1);
          }
        }}
      >
        sub 1
      </button>
      <button onClick={HandleMul}>mul 2</button>
    </>
  );
}
