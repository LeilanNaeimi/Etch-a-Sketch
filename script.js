let container = document.querySelector('.container');
let coloredGrid = [];

function createGrid(numberOfSquares) {
  //Remove existing grid
  container.innerHTML = '';

  //Generate a new grid with selected size

  const maxContainerSizePx = 640;
  container.style.width = maxContainerSizePx;
  container.style.hight = maxContainerSizePx;

  const boxSize = maxContainerSizePx / numberOfSquares;

  //Create square divs using a loop

  for (var i = 1; i <= numberOfSquares; i++) {
    let rows = document.createElement('div');
    rows.style.display = 'flex';

    for (var j = 1; j <= numberOfSquares; j++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      rows.appendChild(pixel);
    }
    container.appendChild(rows);
  }

  // Apply selected size on container

  container.querySelectorAll('.pixel').forEach((pixel) => {
    pixel.style.width = `${boxSize}px`;
    pixel.style.height = `${boxSize}px`;
  });
}

function coloring(color) {
  createGrid(20);

  container.addEventListener('mouseover', changeColor(color));

  function changeColor(newColor) {
    return function () {
      container.style.backgroundColor = newColor;
      coloredGrid.push(container);
    };
  }
  // container.addEventListener('mouseover', setColor);

  // function setColor() {
  //   let pixels = container.querySelectorAll('.pixel');
  //   let pixel = container.querySelector('.pixel');

  //   // pixels.forEach((pixel) => {
  //   pixel.style.setProperty('--hover-color', color);
  //   container.style.backgroundColor = color;
  //   coloredGrid.push(container);

  //   console.log(coloredGrid);
  // });
  // }
}

// function btnClick() {
//   console.log('btnClick');
//   //Display a prompt to get user input for the number of squares per side

//   //Call the grid generation function with the entered input
// }

coloring('orange');
