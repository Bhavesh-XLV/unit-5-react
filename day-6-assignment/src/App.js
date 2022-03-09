import { useEffect, useState } from "react";
import "./App.css";
import Todos, { Groceries } from "./components/Grocery";
import Stopwatch from "./components/Stopwatch";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <Stopwatch initial={1} final={10} /> : ""}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Timer" : "Show Timer"}
      </button>

      {/* <Groceries /> */}
    </div>
    // <div className="App">
    //   <Todos />
    // </div>
  );
}

export default App;
