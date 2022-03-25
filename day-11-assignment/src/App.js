import logo from "./logo.svg";
import "./App.css";
import Todo from "./Components/Todo";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hello from "./Components/Hello";
import TodoDetail from "./Components/TodoDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
