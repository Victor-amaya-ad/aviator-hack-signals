const signals = ['1.50x', '2.10x', '1.85x', '3.00x', '1.40x', '2.25x', '1.60x'];
let index = 0;

function updateSignal() {
  const signalDiv = document.querySelector('.signal');
  signalDiv.textContent = signals[index];
  index = (index + 1) % signals.length;
}

// Cambiar la señal cada 5 segundos
setInterval(updateSignal, 5000);
