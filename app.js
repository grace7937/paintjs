const canvas = document.getElementById("jsCanvas");

let paingting = false;

function stopPainting() {
    painting = false;

}
function onMouseMove(event) {
    const x = event.offsetX;
    const Y = event.offsetY;

}

function onMouseDown(event) {
    console.log(event);
}

function onMouseDown (event) {
    painting = ture;
}

function onMouseUp(event) {
   stopPainting()
   
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown );
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}