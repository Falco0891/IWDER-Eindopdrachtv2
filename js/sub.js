var modal = document.getElementById("myModal");

var btn = document.getElementsByClassName("myBtn");
Array.from(btn).forEach((e) => {
  e.onclick = function() {
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
  }
})

var cross = document.getElementsByClassName("close")[0];



cross.onclick = function() {
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
  }
}