var cards = document.getElementById("cards")
var terminalBox = document.getElementById("terminalBox")
var terminal = document.getElementById("terminal")
var tTopBar = document.getElementById("tTopBar")
var iTopBar = document.getElementById("iTopBar")
var immaginiBox = document.getElementById("immaginiBox")
var menu = document.getElementById("menuButton")
var body = document.getElementsByClassName('body')
var screenRect = document.body.getBoundingClientRect();

var stage = 0
let lastKnownScrollPosition = 0;
let ticking = false;
var secondPage = false
var secondPagePos = 200

var baseBackground = 'rgb(36, 36, 36)'
var secondBackground = 'rgb(88,99,0,1)'

const [red, green, blue] = [36, 36, 36]
const section1 = document.querySelector('body')

function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }
  
  function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
  }

moveItem(tTopBar, terminalBox)
moveItem(iTopBar, immaginiBox)


// window.addEventListener('scroll', () => {
//   let y = window.scrollY


//     console.log(vh(100))
//     console.log(y)

//     if(y>vh(10)){
//         document.body.style.background = secondBackground
//     } else if(y<vh(100)) {
//         document.body.style.background = baseBackground
//     }

//   isInViewport('#secondPage')
// })


function isInViewport(id) {

  const box = document.querySelector(id);
  const rect = box.getBoundingClientRect();

}


function showMenu(){



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
    // INJECT CSS
    var css = document.createElement("style");

    css.innerHTML = ".typewrite > .wrap { padding-right:5px; border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function moveItem(item, parent){

    item.onmousedown = function(event) {

            let shiftX = event.clientX - item.getBoundingClientRect().left;
            let shiftY = event.clientY - item.getBoundingClientRect().top;

            parent.style.zIndex = "34223423"
            parent.style.position = 'absolute'

            function moveAt(pageX, pageY) {
                if(screenRect.width>pageX&&0<pageX){
                    // item.style.left = pageX - shiftX + 'px';
                    // item.style.top = pageY - shiftY + 'px';

                    console.log(pageX)
                    console.log(pageY)
                    parent.style.left = pageX - 65 - shiftX + 'px';
                    parent.style.top = pageY - 100 - shiftY + 'px';

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
