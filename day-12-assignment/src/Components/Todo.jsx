import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Todo/action";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios.get("http://localhost:3001/todos").then((res) => {
      console.log(res.data);
      dispatch(addTodo(res.data));
    });
  };

  const addTodos = () => {
    axios
      .post("http://localhost:3001/todos", {
        title,
        status: false,
      })
      .then(() => {
        setShow(true);
        getTodos();
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3001/todos/${id}`).then(() => getTodos());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add something"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={() => addTodos()}>ADD</button>
      <br />

      {todos.map((e) => (
        <div key={e.id}>
          <span>{e.title}</span>
          <button
            onClick={() => {
              handleDelete(e.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export { Todo };
