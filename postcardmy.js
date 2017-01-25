var original = 0;

var img = new Image();
img.onload = function() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("photo").style.backgroundImage = "url('./photo2b.jpg')";
};
img.src = './photo2b.jpg';

function reveal() {
  document.getElementById("ribbon").style.display = "none";
  document.getElementById("ribbon2").style.display = "none";
  document.getElementById("front").style.display = "block";
  document.getElementById("back").style.display = "block";
}

var mouseDown = false;
document.getElementById("wrapper").onmousedown = function() {
  mouseDown = true;
};
document.getElementById("wrapper").onmouseup = function() {
  mouseDown = false;
};
document.getElementById("wrapper").onmousemove = function(e) {
  //if (mouseDown) {
    document.getElementById("ribbon22").style.paddingLeft = e.offsetX + 'px';
  //}
};

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
