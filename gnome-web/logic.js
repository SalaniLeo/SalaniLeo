const f = document.getElementById('form');
const q = document.getElementById('searchBar');
var shortcut = document.getElementById('shortcut')
var shButton = document.getElementById('shButton');
var addShPage = document.getElementById('addShPage');
var nameBar = document.querySelector('#nameBar')
var addrBar = document.querySelector('#addrBar')
var shFilter = document.getElementById('shFilter')
var google = 'https://www.google.com/search?q=';
var shNameP = document.getElementById('name')

function submitted() {
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}


document.querySelector('#searchBar').addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        const url = google + '+' + q.value;
        window.open(url,"_self");
    
    }
});

document.querySelector('#addShPage').addEventListener('keypress', function(e) {
    if (e.key == "Escape") {
      console.log("adfsdfdf")
    }
  });

  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        cancel();
    }
};
  

function addShortcut(){

    addShPage.classList.add('show')
    addShPage.style.zIndex = '323123'
    shFilter.style.zIndex = '300'

}

function save(){

    cancel();
}

function cancel(){

    addShPage.classList.remove('show')
    addShPage.style.zIndex = '-1'
    shFilter.style.zIndex = '-1'

}
