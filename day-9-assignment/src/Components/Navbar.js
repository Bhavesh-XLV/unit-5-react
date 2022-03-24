import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

export default function Navbar() {
  const { show, status, handleToggle } = useContext(AuthContext);

  const [data, setData] = useState({
    mail: "",
    password: "",
  });

  const [token, setToken] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  const handleLogin = () => {
    console.log(data.mail);
    console.log(data.password);
    axios
      .post("https://reqres.in/api/login", {
        email: data.mail,
        password: data.password,
      })
      .then((res) => {
        setToken(res.data.token);
        handleToggle();
      })
      .catch((err) => {
        alert("please enter valid email and password");
      });
  };
  return (
    <div>
      <h1>Status: {status === true ? "True" : "False"}</h1>
      {status ? <h3>Token: {token}</h3> : null}
      {show ? (
        <div>
          <input
            type="text"
            placeholder="email"
            id="mail"
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="enter password"
            id="password"
            onChange={handleChange}
          />
          <br />
          <br />
        </div>
      ) : null}

      <button
        onClick={() => {
          // handleToggle();
          handleLogin();
        }}
      >
        {status === true ? "Logout" : "Login"}
      </button>
    </div>
  );
}
