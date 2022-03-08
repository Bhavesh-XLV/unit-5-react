import React, { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export function Grocery() {
  const [data, setData] = useState([]);
  const handleAdd = (title) => {
    const payLoad = {
      title,
      id: Date.now(),
    };
    setData([...data, payLoad]);
  };

  const handleDelete = (id) => {
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        data.splice(0, 1);
        setData([...data]);
      }
    }
  };

  return (
    <div>
      <GroceryInput onClick={handleAdd} />
      {data.map((item) => (
        <GroceryList handleDelete={handleDelete} key={item.id} {...item} />
      ))}
    </div>
  );
}
