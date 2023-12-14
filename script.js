const value = document.querySelector("#value");
const input = document.querySelector("#vol");

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// /******** */
for (var i = 1; i <= 16; i++) {
  let row = document.createElement("div");
  row.style.display = "flex";

  for (var j = 1; j <= 16; j++) {
    let div = document.createElement("div");
    div.className = "box";
    row.appendChild(div);

    div.addEventListener("click", function () {
      div.style.backgroundColor = "blue";
      console.log("blue");
    });
  }

  container.appendChild(row);
}
/******** slider value ************/
value.textContent = "16 * 16";
//  `${input.value} * ${input.value}`;
input.addEventListener("input", (e) => {
  value.textContent = `${e.target.value} * ${e.target.value}`;
});
/**************** */
