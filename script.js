const sliderValue = document.querySelector("#sliderValue");
const inputVol = document.querySelector("#vol");
const btnClear = document.querySelector(".clear");
const btnErase = document.querySelector(".erase");

const colorPicker = document.getElementById("colorPicker");
let coloredDivs = [];

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// /******** */
const selectedColor = colorPicker.addEventListener("input", function () {
  const color = this.value;
  createDiv(color);
  console.log(100);
});

// console.log(color);
createDiv("gray");

function createDiv(color) {
  container.textContent = "";
  // coloredDivs = [];
  for (var i = 1; i <= 16; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";

    for (var j = 1; j <= 16; j++) {
      let div = document.createElement("div");
      div.className = "box";
      row.appendChild(div);

      // div.addEventListener(
      //   "mouseover",
      //   (function (newColor) {
      //     return function () {
      //       div.style.backgroundColor = newColor;
      //     };
      //   })(color)
      // );
      div.addEventListener("mouseover", changeColor(color));
      function changeColor(newColor) {
        return function () {
          div.style.backgroundColor = newColor;
          coloredDivs.push(div);
        };
      }
    }
    container.appendChild(row);
  }
}

/******** slider value ************/
sliderValue.textContent = "16 * 16";
inputVol.addEventListener("input", (e) => {
  sliderValue.textContent = `${e.target.value} * ${e.target.value}`;
});
/***** clear page **** */

btnClear.addEventListener("click", clear);

function clear() {
  let allBox = document.querySelectorAll(".box");
  allBox.forEach(function (box) {
    // Set background color to empty string to erase
    box.style.backgroundColor = "";
  });
}

/*****   erase pixels  ****** */

btnErase.addEventListener("click", erase);

function erase() {
  console.log(coloredDivs);
  coloredDivs.forEach(function (coloredDiv) {
    coloredDiv.style.backgroundColor = "red";
  });
}
/********************* */
