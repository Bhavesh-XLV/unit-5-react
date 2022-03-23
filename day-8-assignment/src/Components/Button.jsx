// import React from "react";

// export default function Button({ children }) {
//   return (
//     <div>
//       <button>{children}</button>
//     </div>
//   );
// }

// css in js

import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-right: 20px;
  font-weight: 700;
  background-color: ${({ id }) => (id === 1 ? "blue" : "white")};
  color: ${({ id }) => (id === 1 ? "white" : id === 5 ? "blue" : "black")};
  border: ${({ id }) =>
    id === 1
      ? "none"
      : id === 2
      ? "1px solid black"
      : id === 3
      ? "1px dashed black"
      : "none"};

  &:hover {
    background-color: red;
  }
`;

export { Button };
