// script.js

const plants = document.querySelectorAll('.plant');
const terrarium = document.getElementById('terrarium');

// Habilitar arrastre para las plantas
plants.forEach(plant => {
  plant.addEventListener('dragstart', event => {
    event.dataTransfer.setData('id', event.target.id);
  });
});

// Permitir soltar plantas en el terrario
terrarium.addEventListener('dragover', event => {
  event.preventDefault();
});

terrarium.addEventListener('drop', event => {
  event.preventDefault();
  const plantId = event.dataTransfer.getData('id');
  const plant = document.getElementById(plantId);
  const clone = plant.cloneNode(true); // Clona la planta arrastrada
  clone.style.position = 'absolute';
  clone.style.left = `${event.offsetX - 25}px`; // Ajusta posición
  clone.style.top = `${event.offsetY - 25}px`;
  terrarium.appendChild(clone);
});
