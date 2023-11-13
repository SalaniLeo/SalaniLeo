let Loaded = false

setTimeout(() => {
  toggleVissible();
}, 3000);
console.log(Loaded);

function toggleVissible() {
  console.log(Loaded);
  Loaded = true
}