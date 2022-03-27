import React, { useState } from "react";
import { Todo } from "./Todo";

const Home = () => {
  var x = localStorage.getItem("status");

  return (
    <div>
      {x == "false" ? "Please click on login to see and add todo" : <Todo />}
    </div>
  );
};

export default Home;
