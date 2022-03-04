import { sum, mul } from "./calc";
import "./index.css";
import img from "../download.png";

console.log(sum(5, 5));

console.log(mul(5, 6));

console.log(img);

let image = document.createElement("img");
image.src = img;
image.classList.add("img_css");

document.getElementById("iam").append(image);

document.querySelector("#sub").addEventListener("submit", addItem);

function addItem(event) {
  event.preventDefault();
  var row = document.createElement("tr");

  var tet = document.getElementById("tet").value;
  var td3 = document.createElement("td");
  td3.textContent = tet;

  var name = document.getElementById("name").value;
  var td1 = document.createElement("td");
  td1.textContent = name;

  var td2 = document.createElement("td");
  td2.textContent = "Delete";
  td2.addEventListener("click", deleteTask);

  row.append(td3, td1, td2);
  document.querySelector("tbody").append(row);
}

function deleteTask(event) {
  event.target.parentNode.remove();
}
