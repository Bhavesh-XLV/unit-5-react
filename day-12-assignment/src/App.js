import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./Components/Todo";
import Counter from "./Components/Counter";
import Auth from "./Components/Auth";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>

      {/* <Counter /> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;
