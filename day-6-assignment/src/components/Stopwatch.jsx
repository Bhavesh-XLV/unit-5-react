import React, { useEffect, useState } from "react";

export default function Stopwatch(props) {
  const [timer, setTimer] = useState(props.initial);
  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev === props.final) {
          clearInterval(id);
          return props.initial;
        }
        return prev + 1;
      });
      console.log("interval");
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <div>Timer:{timer}</div>;
}
