var screen = document.getElementById("container")

var screenRect = document.body.getBoundingClientRect();
var playerRect = screen.getBoundingClientRect();

let element1 = document.getElementById("whoami")
let element2 = document.getElementById("skills")
let element3 = document.getElementById("projects")
let about = document.getElementById("about")
let container = document.getElementById("container")

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
  
    item.style.transitionDuration = '0s';
    item.style.position = 'absolute';

    function moveAt(pageX, pageY) {
        if(screenRect.width>pageX&&0<pageX){
          console.log("aaadad")
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
    };
  };
  
  item.ondragstart = function() {
    return false;
  };


}


function goAbout(){


  setTimeout(() => {  

    
    element1.style.left = '-1000px';

  }, 100);


  setTimeout(() => {

    element2.style.left = '-1000px';

  }, 250);



  setTimeout(() => {  

    element3.style.left = '-1000px';
  
  }, 400);

  setTimeout(() => {    

    about.style.left = '30vw';

  }, 1400);

}


function addClass(el, cl){
  el.classList.add(cl)
}

function goHome(){

  setTimeout(() => {  

    about.style.top = '20vh';
  

  }, 100);

  setTimeout(() => {  

    element1.style.left = '20vw';
    element1.style.top = '15vh';   
    
  }, 500);


  setTimeout(() => {

    element2.style.left = '10vw';
    element2.style.top = '60vh';

  }, 750);



  setTimeout(() => {  

    element3.style.left = '55vw';
    element3.style.top = '35vh';
  
  }, 900);

}

