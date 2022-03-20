import "./App.css";
import { useState } from "react";
import Forms from "./components/Forms";

function App() {
  // const [count, setCount] = useState(0);
  // const [bg, setbg] = useState("000000");
  return (
    <div
      className="App"
      // style={{ background: "#" + bg }}
      // onMouseMove={(e) => {
      //   setCount(`${e.clientX}, ${e.clientY}`);
      //   setbg(
      //     `${Math.round(Math.random() * 10)}${Math.round(
      //       Math.random() * 10
      //     )}${Math.round(Math.random() * 10)}`
      //   );
      // }}
    >
      {/* <input type="text" />
      <button>Add</button>
      <h2>{count}</h2> */}
      <Forms />
    </div>
  );
}

export default App;
