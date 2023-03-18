var screen = document.getElementById("container")

var screenRect = document.body.getBoundingClientRect();
var playerRect = screen.getBoundingClientRect();

function getCursor(event) {
    let x = event.clientX;
    let y = event.clientY;
    let _position = `X: ${x}<br>Y: ${y}`;

    const infoElement = document.getElementById('mouse');
    infoElement.innerHTML = _position;
    infoElement.style.top = y + "px";
    infoElement.style.left = x + "px";

}

let element1 = document.getElementById("whoami")
let element2 = document.getElementById("skills")
let element3 = document.getElementById("projects")






element1.onmousedown = function(event) {

    let shiftX = event.clientX - element1.getBoundingClientRect().left;
    let shiftY = event.clientY - element1.getBoundingClientRect().top;
  
    element1.style.position = 'absolute';
    element1.style.transitionDuration = '0s';
    element1.style.zIndex = 1000;
    document.body.append(element1);
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        
        element1.style.left = pageX+27.5 - shiftX + 'px';
        element1.style.top = pageY+12.5- shiftY + 'px';
      
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    
    }
    document.addEventListener('mousemove', onMouseMove);
    element1.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      element1.style.transitionDuration = '0.25s';
      element1.onmouseup = null;
    };
  };
  
  element1.ondragstart = function() {
    return false;
  };

element2.onmousedown = function(event) {

    let shiftX = event.clientX - element2.getBoundingClientRect().left;
    let shiftY = event.clientY - element2.getBoundingClientRect().top;
  
    element2.style.position = 'absolute';
    element2.style.transitionDuration = '0s';
    element2.style.zIndex = 1000;
    document.body.append(element2);
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        element2.style.left = pageX+27.5 - shiftX + 'px';
        element2.style.top = pageY+12.5- shiftY + 'px';
    }
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    element2.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      element2.style.transitionDuration = '0.25s';
      element2.onmouseup = null;
    };
  };
  
  element2.ondragstart = function() {
    return false;
  };


element3.onmousedown = function(event) {
  
      let shiftX = event.clientX - element3.getBoundingClientRect().left;
      let shiftY = event.clientY - element3.getBoundingClientRect().top;
    
      element3.style.position = 'absolute';
      element3.style.transitionDuration = '0s';
      element3.style.zIndex = 1000;
      document.body.append(element3);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        element3.style.left = pageX+27.5 - shiftX + 'px';
        element3.style.top = pageY+12.5- shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        console.log(event.pageX, event.pageY)
      }
      document.addEventListener('mousemove', onMouseMove);
      element3.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        element3.style.transitionDuration = '0.25s';
        element3.onmouseup = null;
      };
    };
    
    element3.ondragstart = function() {
        return false;
    };
