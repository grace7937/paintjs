const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementById("jsColor");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = 'blue';
ctx.lineWidth =1.5;



let painting = false;

function stopPainting() {
    painting = false;

}

function startPainting() {
    painting = true;
}
function onMouseMove(event) {
    //const x 는 이벤트 발생시 x자표 위치이다.
    //const y 는 이벤트 발생시 y자표 위치이다.
    const X = event.offsetX;
    const Y = event.offsetY;

    if (!painting) {
        //false 값일때 path를 생성한다
        //path 값을 x,y 값으로 무브한다.
        ctx.beginPath();
        ctx.moveTo(X, Y);
    } else {
        ctx.lineTo(X, Y);
        ctx.stroke();
    }

    }


function onMouseDown(event) {
    console.log(event);
}




function onMouseUp(event) {
   stopPainting()
   
}

function handleColorClick(event) {
    console.log(event.target.style);
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting );
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
