let container = document.querySelector('.container');

function createGrid(numberOfSquares) {
  // console.log('grid');
  //Remove existing grid

  //Generate a new grid with the specified number of squares per side

  const maxContainerSizePx = 640;
  container.style.width = maxContainerSizePx;
  container.style.hight = maxContainerSizePx;

  const boxSize = maxContainerSizePx / numberOfSquares;
  console.log(boxSize);

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

function hoverEffect() {
  console.log('hoverEffect');
  //Add event listeners for mouseenter and mouseleave events

  //Change color of the grid div on mouseenter

  //Revert to the original color on mouseleave
}

function btnClick() {
  console.log('btnClick');
  //Display a prompt to get user input for the number of squares per side

  //Call the grid generation function with the entered input
}

createGrid(12);
