const sliderValue = document.querySelector("#sliderValue");
const inputVol = document.querySelector("#vol");
const btnClear = document.querySelector(".clear");
const btnErase = document.querySelector(".erase");
const colorPicker = document.getElementById("colorPicker");
let coloredDivs = [];

let container = document.createElement("div");
container.classList.add("container");
container.setAttribute("id", "container");
document.body.appendChild(container);

// /******** */
colorPicker.addEventListener("input", function (event) {
  const color = event.target.value;
  const divs = document.querySelectorAll(".box");
  drawColor(color);
});

function drawColor(color) {
  const divs = document.querySelectorAll(".box");
  for (i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", changeColor(color, divs[i]));
  }
}

function changeColor(newColor, div) {
  div.style.backgroundColor = newColor;
  coloredDivs.push(div);
}

createDiv("gray", inputVol.value);

function createDiv(color, size) {
  container.textContent = "";
  const book = document.getElementById("container");
  book.style.resize = "none";

  const maxContainerSizePx = 640; // 1rem = 16px
  book.style.width = maxContainerSizePx;
  book.style.height = maxContainerSizePx;

  const boxSize = maxContainerSizePx / size;

  for (var i = 1; i <= size; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";

    for (var j = 1; j <= size; j++) {
      let div = document.createElement("div");
      div.className = "box";
      row.appendChild(div);

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
  container.querySelectorAll(".box").forEach((box) => {
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
  });
}

/******** slider value ************/
sliderValue.textContent = "16 * 16";
inputVol.addEventListener("input", (e) => {
  sliderValue.textContent = `${e.target.value} * ${e.target.value}`;

  // console.log(sliderValue.textContent);
  createDiv("gray", `${e.target.value}`);
});
/***** clear page **** */

btnClear.addEventListener("click", clear);

function clear() {
  coloredDivs.forEach((div) => {
    div.style.backgroundColor = "";
  });
  coloredDivs = [];
}

/******erase Color******** */
/*********FIXME: */
btnErase.addEventListener("click", eraseColor);

function eraseColor() {
  container.querySelectorAll(".box").forEach((box) => {
    box.style.backgroundColor = "";
  });
}
