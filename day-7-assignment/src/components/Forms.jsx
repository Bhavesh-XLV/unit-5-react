import axios from "axios";
import { React, useEffect, useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    address: "",
    department: "accounts",
    salary: "",
    married: "",
  });

  const [data, showData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3001/users").then((res) => {
      showData(res.data);
    });
  };

  const handleChange = (e) => {
    // console.log(e.target.id, e.target.value);

    // destruturing
    let { id, value, checked, type } = e.target;

    // for check box
    value = type === "checkbox" ? (checked ? "true" : "false") : value;
    // computate property
    setFormData({
      ...formData,
      [id]: value,
    });

    // if (id === "username") {
    //   setFormData({ ...formData, username: value });
    // }

    // if (id == "age") {
    //   setFormData({ ...formData, age: value });
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users", formData)
      .then(function () {
        getData();
        alert("User Created Successfully");
      })
      .catch(function (error) {
        console.log(error);
      });

    // setFormData({
    //   username: "",
    //   age: "",
    // });

    console.log(formData);
    console.log(formData.married);
  };

  return (
    <div>
      <h1>Sign-up</h1>
      <input
        // value={formData.username}
        id="username"
        type="text"
        onChange={handleChange}
        placeholder="enter username"
      />
      <br />
      <input
        // value={formData.age}
        id="age"
        type="number"
        onChange={handleChange}
        placeholder="enter age"
      />
      <br />
      <textarea
        // value={formData.address}
        id="address"
        type="text"
        cols="20"
        rows="5"
        onChange={handleChange}
        placeholder="enter address"
      />
      <br />
      <select
        id="department"
        // value={formData.department}
        onChange={handleChange}
      >
        <option value="accounts">accounts</option>
        <option value="financial">financial</option>
        <option value="testing">testing</option>
      </select>
      <br />
      <input
        // value={formData.salary}
        id="salary"
        type="salary"
        onChange={handleChange}
        placeholder="enter salary"
      />
      <br />
      Married
      <input
        onChange={handleChange}
        type="checkbox"
        id="married"
        checked={formData.married}
      />
      <br />
      <input type="submit" value="Submit Form" onClick={handleSubmit} />
      <table>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Address</td>
          <td>Department</td>
          <td>Salary</td>
          <td>Status</td>
        </tr>
        {data.map((e) => (
          <tr key={e.id}>
            <td>{e.username}</td>
            <td>{e.age}</td>
            <td>{e.address}</td>
            <td>{e.department}</td>
            <td>{e.salary}</td>
            <td>{e.married}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
