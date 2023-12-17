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
let selectedColor = colorPicker.addEventListener("input", function () {
  const color = this.value;
  createDiv(color, inputVol.value);
});

createDiv("gray", inputVol.value);

function createDiv(color, size) {
  container.textContent = "";
  document.getElementById("container").style.resize = "none";

  const maxContainerSizePx = 64 * 64; // 1rem = 16px

  size = Math.min(size, 64);

  const boxSize = size / maxContainerSizePx;

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

/******   eraser  ******** */
/*********FIXME: */
btnErase.addEventListener("click", eraseColor);

function eraseColor() {
  container.querySelectorAll(".box").forEach((box) => {
    box.style.backgroundColor = "";
  });
}
