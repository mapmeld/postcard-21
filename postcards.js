document.getElementById("wrapper").onclick = function() {
  if (document.getElementById("wrapper").className === "flip") {
    document.getElementById("wrapper").className = "noflip";    
  } else {
    document.getElementById("wrapper").className = "flip";
  }
};
