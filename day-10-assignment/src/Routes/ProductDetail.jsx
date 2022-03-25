import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const [exist, notExist] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/product/${id}`)
      .then((res) => {
        setSingleData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        notExist(false);
      });
  }, []);
  return (
    <div>
      {exist === true ? (
        <div>
          <h1>Product id: {id}</h1>
          <h1>Product name: {singleData.name}</h1>
        </div>
      ) : (
        <h1>Hello Product does not exist</h1>
      )}
    </div>
  );
}
