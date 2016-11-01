var original = 0;

var img = new Image();
img.onload = function() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("photo").style.backgroundImage = "url('./photo.jpg')";
};
img.src = './photo.jpg';

function reveal() {
  document.getElementById("ribbon").style.display = "none";
  document.getElementById("ribbon2").style.display = "none";
  document.getElementById("front").style.display = "block";
  document.getElementById("back").style.display = "block";
}

var mc = new Hammer(document.getElementById("wrapper"));
var swiped = false;
mc.on('swipe', function() {
  if (swiped) {
    return;
  }
  swiped = true;
  reveal();
  mc.on('tap', function() {
    original += 180;
    document.getElementById("wrapper").style.transform = 'rotateY(' + original + 'deg)';
  });
});
