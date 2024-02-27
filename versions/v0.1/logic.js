var cards = document.getElementById("cards")
var terminalBox = document.getElementById("terminalBox")
var terminal = document.getElementById("terminal")

var tTopBar = document.getElementById("tTopBar")
var iTopBar = document.getElementById("iTopBar")

var immaginiBox = document.getElementById("immaginiBox")
var menu = document.getElementById("menuButton")
var body = document.getElementsByClassName('body')
var screenRect = document.body.getBoundingClientRect();
var projectsShowcase = document.getElementById("projectsShowcase")
var downArrow = document.getElementById("downArrow")
var secondPage = document.getElementById("secondPage")
var firstPage = document.getElementById("firstPage")
var immaginiDesc = document.getElementById("immaginiDesc")
var immagini = document.getElementById("immagini")
var fwindow = document.getElementById("forecastWindow")

var stage = 0
let lastKnownScrollPosition = 0;
let ticking = false;
var secondPagePos = 200


function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }
  
  function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
  }

window.addEventListener('scroll', () => {
    if(checkVisible(document.getElementsByClassName('lastpage'))){
        downArrow.style.display = 'none'
    } else {
        downArrow.style.display = 'flex'
    }
})


moveItem(tTopBar, terminalBox, firstPage)
moveItem(iTopBar, immaginiBox, immagini)

// window.addEventListener('scroll', () => {
//     if(checkVisible(secondPage)){
//         downArrow.classList.remove('show')
//         downArrow.classList.add('hide')
//     } else {
//         downArrow.classList.remove('hide')
//         downArrow.classList.add('show')
//     }
// })

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 100;

    if (this.isDeleting) { 
        delta /= 2; 
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;

        if(this.txt == 'neofetch'){

            setTimeout(() => {document.getElementById("terminal").src="assets/neofetch.png";}, 0);
            delta = 5000;

        }

    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;

        delta = 500;
    }

    setTimeout(function() {
        document.getElementById("terminal").src="assets/terminal.png";
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }


    var css = document.createElement("style");

    css.innerHTML = ".typewrite > .wrap { padding-right:5px; border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function moveItem(item, parent, container){

        item.onmousedown = function(event) {

                let shiftX = event.clientX - item.getBoundingClientRect().left;
                let shiftY = event.clientY - item.getBoundingClientRect().top;

                parent.style.zIndex = "342242434234233423"
                parent.style.position = 'absolute'

                function moveAt(pageX, pageY) {
                    if(screenRect.width>pageX&&0<pageX){

                        parent.style.left = pageX - offset(container).left - 65 - shiftX + 'px';
                        parent.style.top = pageY - offset(container).top - 100 - shiftY + 'px';

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


function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function copyMail() {
  
    mail = 'leonardo07.salani@gmail.com'
  
    navigator.clipboard.writeText(mail);
  
  } 
