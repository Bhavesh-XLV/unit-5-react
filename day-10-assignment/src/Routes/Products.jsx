import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/product").then((res) => {
      setProduct([...res.data]);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <h1>I am Product</h1>

      {product.map((e) => (
        <Link to={`/products/${e.id}`} key={e.id}>
          <div>
            {e.name}
            <span style={{ marginLeft: "50px" }}>{e.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
