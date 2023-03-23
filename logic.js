var cards = document.getElementById("cards")
var next = document.getElementById("next")

var stage = 0
let lastKnownScrollPosition = 0;
let ticking = false;
var secondPage = false
var secondPagePos = 200

function doSomething(scrollPos) {

    // if(scrollPos>secondPagePos&&secondPage==false){

    //     document.getElementById("secondPage").scrollIntoView();
    //     secondPage = true
    // }    

    // if(scrollPos<secondPagePos&&secondPage==true){
    //     secondPage = false

    // }
    
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

//   if(window.scrollY>lastKnownScrollPosition){

//   }


  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});


function nextStage(){

    if(stage==0){

        setTimeout(() => {
            var next = document.getElementById("div1")
            next.classList.add("show")
        },0);
        setTimeout(() => {
            var next = document.getElementById("div2")
            next.classList.add("show")
        },200);
        setTimeout(() => {
            var next = document.getElementById("secondPage")
            next.classList.add("show")
        },400);

        stage++

    }

}