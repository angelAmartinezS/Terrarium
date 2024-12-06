dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
  // Estableciendo las posiciones
  // Estableciendo posiciones iniciales
  let despX = 0, despY = 0, initPosX = 0, initPosY = 0;
  // Se le asigna una función al evento
  terrariumElement.onpointerdown = pointerDrag;
  // Función que detecta la seleccion
	function pointerDrag(event){
	  // Se previene el 
	  // funcionamiento por defecto
	  // Un fantasma de arrastre
	  event.preventDefault();
	  // Se accedede a la posicion del mouse
    // mediante las propiedades clientX y clientY
    // del evento
    initPosX = event.clientX;
    initPosY = event.clientY;
    // Se crea la funcion de arrastre
    // dentro del estado pointerDrag
	  document.onpointermove = elementDrag;
	  // Se crea la funcion de soltar
    // dentro del estado pointerDrag
	  document.onpointerup = stopElementDrag;
	}
}
