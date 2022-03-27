import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Auth = () => {
  const auth = useSelector((state) => state.auth.auth);
  const [data, setData] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  const handleLogin = (e) => {
    localStorage.setItem("status", false);
    axios
      .post("https://reqres.in/api/login", {
        email: data.mail,
        password: data.password,
      })
      .then(() => {
        localStorage.setItem("status", true);
        alert("succesfull");
      })
      .catch((err) => {
        alert("please enter valid email and password");
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter email"
        onChange={handleChange}
        id="mail"
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="enter password"
        onChange={handleChange}
        id="password"
      />
      <br />
      <br />
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
};

export default Auth;
