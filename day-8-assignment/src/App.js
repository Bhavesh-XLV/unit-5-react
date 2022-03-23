import logo from "./logo.svg";
import "./App.css";
import { Button } from "./Components/Button";

function App() {
  return (
    <div className="App">
      <Button id={1}>Primary Button</Button>
      <Button id={2}>Default Button</Button>
      <Button id={3}>Dashed Button</Button>
      <Button id={4}>Text Button</Button>
      <Button id={5}>Link Button</Button>
    </div>
  );
}

export default App;
