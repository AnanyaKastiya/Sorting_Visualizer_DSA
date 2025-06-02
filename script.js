let array = [];
let delay = 50;

function generateArray() {
  const container = document.getElementById('array');
  container.innerHTML = '';
  const size = document.getElementById('arraySize').value;
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 300) + 10);
  array.forEach(value => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${value}px`;
    container.appendChild(bar);
  });
}

function updateBars() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar, i) => {
    bar.style.height = `${array[i]}px`;
  });
}

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function sortArray() {
  delay = 101 - document.getElementById('speed').value;
  const algo = document.getElementById('algo').value;
  await window.sortAlgorithms[algo](array, updateBars, sleep, delay);
}
