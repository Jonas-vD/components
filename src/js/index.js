import "../css/style.scss";
import button from "./components/button";
import form from "./components/form";
import circle from "./components/circle";

const holder = document.querySelector("body");

new form(holder);
// new button(holder, {
//   label: "ik ben een label",
//   rounded: true,
// });

// new button(holder, {
//   rounded: true,
// });

// new button(holder, {});

// new button(holder, {
//   label: "help",
//   rounded: true,
// });
const arrShapes = [];

holder.insertAdjacentHTML(
  "beforeend",
  `
<div class="counter">
  <p class="counter__text">Aantal cirkels : <p>
</counter>
`
);

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();

  const color = document.querySelector("#color").value;
  const size = document.querySelector("#size").value;
  const border = document.querySelector("#border").value;
  arrShapes.push(
    new circle(holder, {
      color: color,
      size: size,
      border: border,
    })
  );
  const circleElements = document.querySelectorAll(".circle").length;
  console.log(arrShapes.length);
  document.querySelector(".counter__text").textContent =
    "Aantal cirkels : " + arrShapes.length;

  // console.log(color, fname, lname);
});
