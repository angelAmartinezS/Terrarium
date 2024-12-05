console.log("Working!!!");

// Agregar dragElement a cada planta
for (let i = 1; i <= 14; i++) {
  dragElement(document.getElementById(`plant${i}`));
}

function dragElement(terrariumElement) {
  let despX = 0, despY = 0, initPosX = 0, initPosY = 0;

  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(event) {
    event.preventDefault();
    initPosX = event.clientX;
    initPosY = event.clientY;

    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(event) {
    despX = event.clientX - initPosX;
    despY = event.clientY - initPosY;
    initPosX = event.clientX;
    initPosY = event.clientY;

    terrariumElement.style.left = `${terrariumElement.offsetLeft + despX}px`;
    terrariumElement.style.top = `${terrariumElement.offsetTop + despY}px`;
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
