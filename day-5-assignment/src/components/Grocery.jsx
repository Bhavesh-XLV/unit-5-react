import axios from "axios";
import React, { useEffect, useState } from "react";

export const Groceries = () => {
  const [text, setText] = useState("");
  const [groceries, setGroceries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    axios
      .get(`http://localhost:3001/groceries?_limit=2&_page=${page}`)
      .then((res) => {
        setGroceries(res.data);
      });
  };
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          // fetch("http://localhost:3001/groceries", {
          //   method: "POST",
          //   body: JSON.stringify({ title: "Text", purchased: false }),
          //   headers: {
          //     "content-type": "application/json",
          //   },
          // });
          axios
            .post("http://localhost:3001/groceries", {
              title: text,
              purchased: false,
            })
            .then(() => {
              getData();
            })
            .catch(() => {
              alert("hello data is wrong");
            });
        }}
      >
        Save Grocery
      </button>
      {groceries.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}
      <button
        disabled={page == 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

// export default function Todos() {
//   const [counter1, setCounter1] = useState(0);

//   const [counter2, setCounter2] = useState(0);

//   console.log("before");

//   useEffect(() => {
//     console.log("inside 1");
//     // call every time
//   });

//   useEffect(() => {
//     console.log("inside 1");
//     // call only one time
//   }, []);

//   useEffect(() => {
//     console.log("inside 2");
//     // call during counter 2 time
//   }, [counter2]);

//   console.log("after");
//   return (
//     <div>
//       Todos:
//       <br />
//       <button
//         onClick={() => {
//           setCounter1(counter1 + 1);
//         }}
//       >
//         Add 1
//       </button>
//       <button
//         onClick={() => {
//           setCounter2(counter2 + 1);
//         }}
//       >
//         Add 1
//       </button>
//     </div>
//   );
// }
