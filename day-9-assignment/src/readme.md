import { useState } from "react";
import "./styles.css";
import { v4 as uuid } from "uuid";

export default function App() {
const [status, setStatus] = useState(false);
const [show, setShow] = useState(true);

const handleLogin = () => {
setStatus(!status);
setShow(!show);
};
const handleChange = (e) => {
console.log(e.target.value);
};
return (

<div className="App">
<p>Status: {status === false ? "false" : "true"}</p>
<p>{status === true ? uuid() : null}</p>
{show ? (
<div>
<input onChange={handleChange} type="text" placeholder="email" />
<br />
<br />
<input
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
<br />
<br />
</div>
) : null}
<button onClick={handleLogin}>
{status === false ? "login" : "logout"}
</button>
<br />
<br />
</div>
);
}
