import "./App.css";
import Functional from "./components/Functional.jsx";

export default function App() {
  return (
    <div>
      <Functional
        header="Mobile Operating System"
        list={[
          { listType: "disc", listItem: "Android" },
          { listType: "disc", listItem: "BlackBerry" },
          { listType: "disc", listItem: "IPhone" },
          { listType: "disc", listItem: "Windows Phone" },
        ]}
      />

      <Functional
        header="Mobile Manufactures"
        list={[
          { listType: "square", listItem: "Samsung" },
          { listType: "square", listItem: "HTC" },
          { listType: "disc", listItem: "Micromax" },
          { listType: "circle", listItem: "Apple" },
        ]}
      />
    </div>
  );
}

// function App() {
//   const age = 11;
//   const name = "masai";
//   const data = ["google", "facebook", "amazon"];
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <h1>Your age is: {age}</h1>
//       <ul>
//         you worked for:
//         {data.map((e) => (
//           <li>{e}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const data = [
//     { name: "john", age: 10 },
//     { name: "john", age: 10 },
//     { name: "john", age: 10 },
//     { name: "john", age: 10 },
//   ];
//   // return <div>{data.map((user) => User(user))}</div>;
//   return (
//     <div>
//       {data.map((user) => (
//         <User name={user.name} age={user.age} />
//       ))}
//     </div>
//   );
// }

// function User({ name, age }) {
//   return (
//     <div>
//       <div style={{ fontWeight: "bold" }}>
//         <span>{name}</span>
//         <span>{age}</span>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const header = "Mobile Operating System";
//   const data = [
//     { typer: "disc", list: "Android" },
//     { typer: "circle", list: "BlackBerry" },
//     { typer: "none", list: "IPhone" },
//     { typer: "disc", list: "Windows Phone" },
//   ];
//   return (
//     <>
//       <xy props={(header, data)} />
//     </>
//   );
// }

// function xy(header, data) {
//   console.log(header, data);
//   return (
//     <div>
//       <h1>Header : {header}</h1>
//       <div>{data.map((user) => User(user))}</div>
//     </div>
//   );
// }
// function User(name) {
//   return (
//     <div>
//       <div style={{ fontWeight: "bold" }}>
//         <span>{name}</span>
//       </div>
//     </div>
//   );
// }
// export default App;
