const container = document.getElementById('container');
let gridSize = 16;

function createGrid() {
  container.innerHTML = '';
  container.style.setProperty('--gridSize', gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover', function () {
      setColor(pixel);
    });
    container.appendChild(pixel);
  }
}

function setColor(pixel) {
  pixel.style.backgroundColor = 'gray';
}

function changeGridSize() {
  let newSize = prompt('Enter the number of squares (max 100):');

  newSize = parseInt(newSize);
  // console.log(newSize);
  if (isNaN(newSize) || newSize < 1) {
    alert('Please enter a valid number greater than 0');
    return;
  }

  gridSize = Math.min(newSize, 100);
  createGrid();
}

createGrid();
