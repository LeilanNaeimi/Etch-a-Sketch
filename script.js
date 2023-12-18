const container = document.getElementById('container');

let gridSize = 16;
let currentColor = '#686868';

function createGrid() {
  container.innerHTML = '';
  container.style.setProperty('--gridSize', gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover', function () {
      setColor(pixel); // Pass the pixel element to the setColor function
    });
    container.appendChild(pixel);
  }
}

function setColor(pixel) {
  pixel.style.backgroundColor = currentColor;
}

function updateColor() {
  const colorPicker = document.getElementById('colorPicker');
  currentColor = colorPicker.value;
}

function changeGridSize() {
  let newSize = prompt('Enter the number of squares per side (max 100):');

  // Validate input and set a maximum limit of 100 squares per side
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1) {
    alert('Please enter a valid number greater than 0.');
    return;
  }

  gridSize = Math.min(newSize, 100);
  createGrid();
}

createGrid();

/******** clear page */
function clearPage() {
  container.querySelectorAll('.pixel').forEach((pixel) => {
    pixel.style.backgroundColor = '';
  });
}

/******** Eraser  ********* */
function eraser() {
  const colorPicker = document.getElementById('colorPicker');
  currentColor = '#fce7f2';
}
