import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TodoDetail() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/todo/${id}`).then((Response) => {
      console.log(Response.data);
      setUser(Response.data);
    });
  }, []);

  const handleStatus = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h1>Title: {user.title}</h1>
      <h1 onClick={handleStatus}>
        Status: {toggle == true ? "True" : "False"}
      </h1>
    </div>
  );
}
