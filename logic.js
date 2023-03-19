var screen = document.getElementById("container")

var screenRect = document.body.getBoundingClientRect();
var playerRect = screen.getBoundingClientRect();

let element1 = document.getElementById("whoami")
let element2 = document.getElementById("skills")
let element3 = document.getElementById("projects")

function getCursor(event) {
    let x = event.clientX;
    let y = event.clientY;
    let _position = `X: ${x}<br>Y: ${y}`;

    const infoElement = document.getElementById('mouse');
    infoElement.innerHTML = _position;
    infoElement.style.top = y + "px";
    infoElement.style.left = x + "px";

}

if (!/Android|iPhone/i.test(navigator.userAgent)) {

  element1.classList.add("draggable");
  element2.classList.add("draggable");
  element3.classList.add("draggable");

}

if(element1.classList.contains("draggable")&&element2.classList.contains("draggable")&&element3.classList.contains("draggable")) {

moveItem(element1)
moveItem(element2)
moveItem(element3)

}

function moveItem(item){


  item.onmousedown = function(event) {

    let shiftX = event.clientX - item.getBoundingClientRect().left;
    let shiftY = event.clientY - item.getBoundingClientRect().top;
  
    item.style.position = 'fixed';
    item.style.transitionDuration = '0s';
    document.body.append(item);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        if(screenRect.width>pageX&&0<pageX){
          item.style.left = pageX+27.5 - shiftX + 'px';
          item.style.top = pageY+12.5- shiftY + 'px';
        }

    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    
    }
    document.addEventListener('mousemove', onMouseMove);
    item.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      item.style.transitionDuration = '0.25s';
      item.onmouseup = null;
    };
  };
  
  element1.ondragstart = function() {
    return false;
  };


}