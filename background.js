const Star = function(x, y, z) {

  this.x = x; this.y = y; this.z = z;

  this.size = 3;

};

var context = document.querySelector("canvas").getContext("2d");

var height = document.documentElement.clientHeight;
var width  = document.documentElement.clientWidth;

var stars = new Array();

var max_depth = 100000;

for(let index = 0; index < 200; index ++) stars[index] = new Star(Math.random() * width, Math.random() * height, index * (max_depth / 200));

function loop() {

  window.requestAnimationFrame(loop);

  height = document.documentElement.clientHeight;
  width  = document.documentElement.clientWidth;

  context.canvas.height = height;
  context.canvas.width  = width;

  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);

  for (let index = stars.length - 1; index > -1; index --) {

    let star = stars[index];

    star.z -= 5;

    if (star.z < 0) {

      stars.push(stars.splice(index, 1)[0]);
      star.z = max_depth;
      continue;

    }

    let translate_x = width * 0.5;
    let translate_y = height * 0.5;

    let field_of_view = (height + width) * 8;

    let star_x = (star.x - translate_x) / (star.z / field_of_view) + translate_x;
    let star_y = (star.y - translate_y) / (star.z / field_of_view) + translate_y;

    let scale = field_of_view / (field_of_view + star.z);

    let color = Math.floor(scale * 256);

    context.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
    context.fillRect(star_x, star_y, star.size * scale, star.size * scale);

  }

}
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}
loop();