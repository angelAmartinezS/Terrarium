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
  function dragElement(terrariumElement) {
  // Definición de la función de arrastre
  function elementDrag(eventOnPointerMove) {
    // se calcula una nueva posición
    // como la diferencia de la posición guardada
    // en las variables pos3 y pos4
    despX = eventOnPointerMove.clientX - initPosX;
    despY = eventOnPointerMove.clientY - initPosY;
    // Se actualiza la posicion inicial del mouse
    initPosX = eventOnPointerMove.clientX;
    initPosY = eventOnPointerMove.clientY;
    // Se imprimen las posiciones
    console.log(despX, despY, initPosX, initPosY);;
    // Se le aplica offset al elemento, es decir se desplaza a la nueva
    // posicion del mouse
    terrariumElement.style.left = `${terrariumElement.offsetLeft + despX}px`;
    terrariumElement.style.top = `${terrariumElement.offsetTop + despY}px`;
	  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
