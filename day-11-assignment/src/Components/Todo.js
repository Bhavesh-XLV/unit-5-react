import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Todo() {
  const [title, setTitle] = useState("");
  const [show, setShow] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3001/todo").then((res) => {
      setShow(res.data);
    });
  };

  const handleAdd = () => {
    axios.post("http://localhost:3001/todo", {
      title,
      status: false,
      id: uuid(),
    });
    getData();
    const payload = {
      title,
      status: false,
      id: uuid(),
    };

    dispatch(addTodo(payload));
  };

  const handleDelete = (e) => {
    console.log(e.id);
    const index = show.findIndex((d) => d.id === e.id);
    show.splice(index, 1);
    setShow([...show]);

    axios.delete(`http://localhost:3001/todo/${e.id}`).then((res) => {
      setShow([...show]);
      // getData();
    });
  };
  return (
    <div>
      <h3>Add Todo</h3>
      <input
        type="text"
        placeholder="add something"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add</button>

      {show.map((e) => (
        <div key={e.id}>
          <Link to={`/todo/${e.id}`}>
            <br />
            {e.title}
          </Link>
          <button onClick={() => handleDelete(e)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
